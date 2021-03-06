import Web3 from "web3";
import healtContract from "../../build/contracts/SmallBusiness.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = healtContract.networks[networkId];
      this.meta = new web3.eth.Contract(
        healtContract.abi,
        deployedNetwork.address
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

 
  addCustomer: async function(customerAddress, yourName) {
    const { addCustomer } = this.meta.methods;
    await addCustomer(customerAddress,  yourName).send({
      from: this.account
    });
  },
  addEngineer: async function(_engineerAddress, _yourName) {
    const { addEngineer } = this.meta.methods;
    await addEngineer(_engineerAddress,  _yourName).send({
      from: this.account
    });
  },
  addProject: async function(Name, skills,information, averageOfprice , id) {
    
    const { addProject } = this.meta.methods;
    await addProject( Name, skills,information, averageOfprice , id).send({
      from: this.account,
      value: this.web3.utils.toWei("1", "ether")
    });
  },
  EditProject: async function EditProject(Name, skills,information, averageOfprice ,id) {
    const { EditProject } = this.meta.methods;
    await EditProject(Name, skills,information, averageOfprice ,id).send({
      from: this.account
    });
   
  },
  getProject: async function getProject( _customerAddress  ) {
    const { getProject } = this.meta.methods;
    let p= await getProject(_customerAddress ).call();
    return p;
  },
  
  chooseToWork: async function chooseToWork( _customerAddress ,day,  price ,information  ) {
    const { chooseToWork } = this.meta.methods;
    await chooseToWork(_customerAddress ,day,  price ,information  ).send({
      from: this.account
    });
  },
  accepteCustomer: async function accepteCustomer( _engineerAddress  ) {
    const { accepteCustomer } = this.meta.methods;
    await accepteCustomer(_engineerAddress).send({
      from: this.account
    });
    
  },
  halfPayment : async function halfPayment( _engineerAddress  ) {
    const { halfPayment } = this.meta.methods;
    await halfPayment(_engineerAddress).send({
      from: this.account
    }); 
  },
  finishTheProject: async function finishTheProject( _engineerAddress  ) {
    const { finishTheProject } = this.meta.methods;
    await finishTheProject(_engineerAddress).send({
      from: this.account
    }); 
  },
  _passthevalue: async function _passthevalue(  ) {
    const { _passthevalue } = this.meta.methods;
    await _passthevalue().send({
      from: this.account
    }); 
  },
  
 
};

window.App = App;

window.addEventListener("load", async function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:7545. You should remove this fallback when you deploy live"
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545")
    );
  }

  App.start();
});
export default { App };
