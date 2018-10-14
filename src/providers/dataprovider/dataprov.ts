import { Injectable, EventEmitter } from '@angular/core';
import { default as Web3 } from 'web3';
import { default as EthereumQRPlugin } from 'ethereum-qr-code';
import { Http } from '@angular/http';

@Injectable()
export class DataProvider {
  private  account: any;
  private  address: any;
  private web3: Web3;
  private poolCoinContract: any;

  private allEventsListener: any;

  DataArtifact: any;
  balance = new EventEmitter<number>();
  datasets = new EventEmitter<any[]>();

  private static WEB3_PROVIDER = 'http://192.168.14.252:8545'; 
  private static NETWORK_ID="0xa2c363823aDBE825c2Ca446008feA7B62C0A0451"


  constructor(private http: Http) {
    console.log('DataProvider loaded');

  }

  async instantiateWeb3AndContractAndAccount() {
    console.log("test");
    this.web3 = new Web3(new Web3.providers.HttpProvider(DataProvider.WEB3_PROVIDER));
    console.log('Web3 instantiated and connected to ', DataProvider.WEB3_PROVIDER);
    var accex=localStorage.getItem("accountexists");
    
    if(accex){
      this.account =await localStorage.getItem("accountexists");
      this.account=JSON.parse(this.account);
    }else{
      //  account =await this.web3.eth.personal.newAccount("password");
      //  localStorage.setItem("accountexists",JSON.stringify(account));
      this.account =await this.web3.eth.accounts.create()
       localStorage.setItem("accountexists",JSON.stringify(this.account));
    }
    this.address=this.account.address;
    
    console.log(this.account);
    console.log(this.address);
    this.http.get('assets/contracts/PoolCoin.json').subscribe((data) => {
      this.DataArtifact = data.json();
      this.poolCoinContract =  new this.web3.eth.Contract(
        this.DataArtifact.abi,this.account.address
      );
    // console.log(this.poolCoinContract.options.address);
     console.log(this.fetchBalance());
    });
      console.log("contracts intiated");
     
    var accounts =await this.web3.eth.getAccounts();
    // console.log(accounts);
   
    
      
//     var ACC = '0x65709024D0dCC9771529B27Ccf297beE9b983a9F';

//       var myaccount = "0xa2c363823aDBE825c2Ca446008feA7B62C0A0451"
// //       console.log(myaccount);
// //       console.log("Account initiated");
//         //var accounts=await this.web3.eth.getBalance(accounts[0]);
//     //    console.log(balance); // instanceof BigNumber
//     //    var balance=await this.web3.eth.getBalance(account);
//     //    console.log(balance); // instanceof BigNumber
//     //    var that=this;
//         this.web3.eth.sendTransaction({
//         from: accounts[0],
//         to: myaccount, 
//         value: 100, 
//     }, function(err, transactionHash) {
//         if (err) { 
//             console.log(err); 
//         } else {
//             console.log(transactionHash);
//         }})
    //     var balance= that.web3.eth.getBalance(accounts[0]).then((bal)=>{
    //       console.log(balance); // instanceof BigNumber
    //     });
       
    //    var balance= that.web3.eth.getBalance(account).then((bal)=>{
    //     console.log(balance); // instanceof BigNumber
    //   });;
    //    console.log(balance); // instanceof BigNumber
    // });
    
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
    // const datasets = [];       fr
    // // First get DataSetLength as Call (read)
    // return this.hackinContract.methods.getDataLength(this.account.address).call({ from: this.account.address })
    //   .then(async (length) => {
    //     for (let i = 0; i < length.valueOf(); i++) {
    //       // Then interate over each Dataset and Fetch Result as Call (read)
    //       const data = await this.hackinContract.methods.getDataSetOf(this.account.address, i).call({ from: this.account.address });
    //       datasets.push(data);
    //     }
    //     this.datasets.emit(datasets);
    //   })
  }

   fetchBalance() {
    return this.web3.eth.getBalance(this.account.address)
    // var value =this.poolCoinContract.methods.getBalanceInEth(this.account.address).call({from:this.poolCoinContract.options.address});
    // console.log(value);
    
  }

  watchDatasets() {
    // Current not possible, because no Event set.
  }

  watchBalance() {
    this.allEventsListener = this.poolCoinContract.events.Mint({ filter: { to: this.account.address } }, function (error, event) { console.log(event); })
      .on('data', () => {
        this.fetchBalance()
        this.fetchDatasets()
      });

  }

  async transfer(address: string, amount: number) {

    // create Transaction
    const tx = {
      from: this.account.address,
      to: this.poolCoinContract.options.address,
      data: this.poolCoinContract.methods.transfer(address, amount).encodeABI(),
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
    this.poolCoinContract.metho
  }

}
