import { Injectable, EventEmitter } from '@angular/core';
import { default as Web3 } from 'web3';
import { default as EthereumQRPlugin } from 'ethereum-qr-code';
import { Http } from '@angular/http';

/*
  Generated class for the PrometheusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrometheusProvider {

  private web3: Web3;
  private prometheusContract: any;
  private account: any;
  private allEventsListener: any;

  PrometheusArtifact: any;
  balance = new EventEmitter<number>();
  datasets = new EventEmitter<any[]>();

  // Rinkeby
  // private static WEB3_PROVIDER = window.web3.currentProvider; // Metamask
  //private static WEB3_PROVIDER = 'wss://rinkeby.infura.io/_ws'; // Rinkeby Infura Websocket; better for Event Handling
  //private static WEB3_PROVIDER = 'https://rinkeby.infura.io/v3/67a04a0b2dda4523b3f54e1e921c1267'; // Rinkeby Infura RPC
  private static WEB3_PROVIDER = 'http://192.168.14.252:8545'; // Rinkeby Infura RPC
  //private static NETWORK_ID = 4;
  // https://rinkeby.etherscan.io/token/0xa6d3dd3d622367a7213d16ecdf8238ac22362ec4
  //private static PRIVATE_KEY = 'c6bfc68ec9c2fa0f4f942b8604391527158936021ca68afa5f5853a9c31ec2e2';

  //private static ACC = '0x65709024D0dCC9771529B27Ccf297beE9b983a9F';


  constructor(private http: Http) {
    console.log('PrometheusProvider loaded');

  }

  async instantiateWeb3AndContractAndAccount() {
    console.log("test");
    this.web3 = new Web3(new Web3.providers.HttpProvider(PrometheusProvider.WEB3_PROVIDER));
    console.log('Web3 instantiated and connected to ', PrometheusProvider.WEB3_PROVIDER);
    var accex=localStorage.getItem("accountexists");
    var account;
    if(accex){
      account =await localStorage.getItem("accountexists");
      account=JSON.parse(account);
    }else{
       account =await this.web3.eth.personal.newAccount("password");
       localStorage.setItem("accountexists",JSON.stringify(account));
    }
    
    console.log(account);
    
    var accounts =await this.web3.eth.getAccounts();
    console.log(accounts);
    // this.http.get('assets/contracts/PrometheusToken.json').subscribe((data) => {
    //   this.PrometheusArtifact = data.json();
    //   console.log(this.PrometheusArtifact.networks[PrometheusProvider.NETWORK_ID].address);
    //   this.prometheusContract = new this.web3.eth.Contract(
    //     this.PrometheusArtifact.abi, this.PrometheusArtifact.networks[PrometheusProvider.NETWORK_ID].address
    //   );
    
    //   console.log("Contracts initiated");
//     var ACC = '0x65709024D0dCC9771529B27Ccf297beE9b983a9F';

     //  var myaccount = this.web3.eth.accounts.privateKeyToAccount(PrometheusProvider.PRIVATE_KEY);
//       console.log(myaccount);
//       console.log("Account initiated");
       var balance=await this.web3.eth.getBalance(accounts[0]);
       console.log(balance); // instanceof BigNumber
       var balance=await this.web3.eth.getBalance(account);
       console.log(balance); // instanceof BigNumber
       var that=this;
        this.web3.eth.sendTransaction({
        from: accounts[0],
        to: account, 
        value: 100, 
    }, function(err, transactionHash) {
        if (err) { 
            console.log(err); 
        } else {
            console.log(transactionHash);
        }
        var balance= that.web3.eth.getBalance(accounts[0]).then((bal)=>{
          console.log(balance); // instanceof BigNumber
        });
       
       var balance= that.web3.eth.getBalance(account).then((bal)=>{
        console.log(balance); // instanceof BigNumber
      });;
       console.log(balance); // instanceof BigNumber
    });
    
    //    this.web3.eth.accounts.signTransaction({
    //     to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
    //     value: '1000000000',
    //     gas: 2000000
    // }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
    
// console.log(balance.toString(10)); // '1000000000000'
//console.log(balance.toNumber()); // 1000000000000
    //   this.watchBalance();
    //  // this.fetchBalance();
    //  // this.fetchDatasets();
    // })

  }

  fetchDatasets() {
    const datasets = [];
    // First get DataSetLength as Call (read)
    return this.prometheusContract.methods.getDataLength(this.account.address).call({ from: this.account.address })
      .then(async (length) => {
        for (let i = 0; i < length.valueOf(); i++) {
          // Then interate over each Dataset and Fetch Result as Call (read)
          const data = await this.prometheusContract.methods.getDataSetOf(this.account.address, i).call({ from: this.account.address });
          datasets.push(data);
        }
        this.datasets.emit(datasets);
      })
  }

  fetchBalance() {
    return this.prometheusContract.methods.balanceOf(this.account.address).call({ from: this.account.address })
      .then((value) => this.balance.emit(value.valueOf()));
  }

  watchDatasets() {
    // Current not possible, because no Event set.
  }

  watchBalance() {
    this.allEventsListener = this.prometheusContract.events.Mint({ filter: { to: this.account.address } }, function (error, event) { console.log(event); })
      .on('data', () => {
        this.fetchBalance()
        this.fetchDatasets()
      });

  }

  async transfer(address: string, amount: number) {

    // create Transaction
    const tx = {
      from: this.account.address,
      to: this.prometheusContract.options.address,
      data: this.prometheusContract.methods.transfer(address, amount).encodeABI(),
      gas: 800000,
    };

    console.log(tx);
    console.log(this.account);

    const signedTx = await this.account.signTransaction(tx);
    console.log(signedTx.rawTransaction);

    return this.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .on('error', (error) => console.error("Error!!!! :-(: " + error))
      .on('transactionHash', (txHash) => console.log("TxHash: " + txHash))
      .on('receipt', (receipt) => console.log(receipt));


  }

  getAccountAddress() {
    return this.account.address;
  }

  readQRCodeString(qrcode: string) {
    return new EthereumQRPlugin().readStringToJSON(qrcode);
  }

  sendTx(tx: any) {
    this.prometheusContract.metho
  }

}
