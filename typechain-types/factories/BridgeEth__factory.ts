/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeEth, BridgeEthInterface } from "../BridgeEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "enum BridgeBase.Step",
        name: "step",
        type: "uint8",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "maxProcessedNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "processedNonces",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051620011e9380380620011e9833981810160405281019061003491906100d2565b80336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610144565b6000815190506100cc8161012d565b92915050565b6000602082840312156100e457600080fd5b60006100f2848285016100bd565b91505092915050565b60006101068261010d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610136816100fb565b811461014157600080fd5b50565b61109580620001546000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806352555702146100675780637cc7024014610083578063842a7f12146100b35780638a94b05f146100e3578063f851a440146100ff578063fc0c546a1461011d575b600080fd5b610081600480360381019061007c919061099e565b61013b565b005b61009d60048036038101906100989190610a30565b6104dc565b6040516100aa9190610e26565b60405180910390f35b6100cd60048036038101906100c89190610975565b61050b565b6040516100da9190610f01565b60405180910390f35b6100fd60048036038101906100f89190610a6c565b610523565b005b6101076107cf565b6040516101149190610d78565b60405180910390f35b6101256107f3565b6040516101329190610e86565b60405180910390f35b6000610172878787876040516020016101579493929190610d04565b60405160208183030381529060405280519060200120610819565b90508673ffffffffffffffffffffffffffffffffffffffff166101d98285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610849565b73ffffffffffffffffffffffffffffffffffffffff161461022f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022690610ec1565b60405180910390fd5b60001515600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060009054906101000a900460ff161515146102d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ca90610ee1565b60405180910390fd5b6001600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff021916908315150217905550600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411156103c85783600360008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1987876040518363ffffffff1660e01b8152600401610425929190610dfd565b600060405180830381600087803b15801561043f57600080fd5b505af1158015610453573d6000803e3d6000fd5b50505050600180811115610490577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fce5a9b86edd3b998c3948a7934c7ecf7dba73c4c5bcf56cf576bca4aa2beeb30888888428989896040516104cb9796959493929190610d93565b60405180910390a250505050505050565b60026020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60036020528060005260406000206000915090505481565b60001515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff161515146105c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be90610ea1565b60405180910390fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff021916908315150217905550600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548311156106bc5782600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac33866040518363ffffffff1660e01b8152600401610719929190610dfd565b600060405180830381600087803b15801561073357600080fd5b505af1158015610747573d6000803e3d6000fd5b5050505060006001811115610785577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fce5a9b86edd3b998c3948a7934c7ecf7dba73c4c5bcf56cf576bca4aa2beeb30338787428888886040516107c09796959493929190610d93565b60405180910390a25050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008160405160200161082c9190610d52565b604051602081830303815290604052805190602001209050919050565b600080600080610858856108be565b809350819450829550505050600186848484604051600081526020016040526040516108879493929190610e41565b6020604051602081039080840390855afa1580156108a9573d6000803e3d6000fd5b50505060206040510351935050505092915050565b600080600060418451146108d157600080fd5b60008060006020870151925060408701519150606087015160001a90508083839550955095505050509193909250565b60008135905061091081611031565b92915050565b60008083601f84011261092857600080fd5b8235905067ffffffffffffffff81111561094157600080fd5b60208301915083600182028301111561095957600080fd5b9250929050565b60008135905061096f81611048565b92915050565b60006020828403121561098757600080fd5b600061099584828501610901565b91505092915050565b60008060008060008060a087890312156109b757600080fd5b60006109c589828a01610901565b96505060206109d689828a01610901565b95505060406109e789828a01610960565b94505060606109f889828a01610960565b935050608087013567ffffffffffffffff811115610a1557600080fd5b610a2189828a01610916565b92509250509295509295509295565b60008060408385031215610a4357600080fd5b6000610a5185828601610901565b9250506020610a6285828601610960565b9150509250929050565b600080600080600060808688031215610a8457600080fd5b6000610a9288828901610901565b9550506020610aa388828901610960565b9450506040610ab488828901610960565b935050606086013567ffffffffffffffff811115610ad157600080fd5b610add88828901610916565b92509250509295509295909350565b610af581610f49565b82525050565b610b0c610b0782610f49565b610fdb565b82525050565b610b1b81610f5b565b82525050565b610b2a81610f67565b82525050565b610b41610b3c82610f67565b610fed565b82525050565b6000610b538385610f1c565b9350610b60838584610fcc565b610b6983611013565b840190509392505050565b610b7d81610fa8565b82525050565b6000610b90601c83610f3e565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b6000610bd0602783610f2d565b91507f42726964676520426173653a205472616e7366657220616c726561647920707260008301527f6f636573736564000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c36601c83610f2d565b91507f42726964676520426173653a2057726f6e67205369676e6174757265000000006000830152602082019050919050565b6000610c76602783610f2d565b91507f42726964676520426173653a205472616e7366657220416c726561647920507260008301527f6f636573736564000000000000000000000000000000000000000000000000006020830152604082019050919050565b610cd881610f91565b82525050565b610cef610cea82610f91565b611009565b82525050565b610cfe81610f9b565b82525050565b6000610d108287610afb565b601482019150610d208286610afb565b601482019150610d308285610cde565b602082019150610d408284610cde565b60208201915081905095945050505050565b6000610d5d82610b83565b9150610d698284610b30565b60208201915081905092915050565b6000602082019050610d8d6000830184610aec565b92915050565b600060c082019050610da8600083018a610aec565b610db56020830189610aec565b610dc26040830188610ccf565b610dcf6060830187610ccf565b610ddc6080830186610ccf565b81810360a0830152610def818486610b47565b905098975050505050505050565b6000604082019050610e126000830185610aec565b610e1f6020830184610ccf565b9392505050565b6000602082019050610e3b6000830184610b12565b92915050565b6000608082019050610e566000830187610b21565b610e636020830186610cf5565b610e706040830185610b21565b610e7d6060830184610b21565b95945050505050565b6000602082019050610e9b6000830184610b74565b92915050565b60006020820190508181036000830152610eba81610bc3565b9050919050565b60006020820190508181036000830152610eda81610c29565b9050919050565b60006020820190508181036000830152610efa81610c69565b9050919050565b6000602082019050610f166000830184610ccf565b92915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610f5482610f71565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000610fb382610fba565b9050919050565b6000610fc582610f71565b9050919050565b82818337600083830152505050565b6000610fe682610ff7565b9050919050565b6000819050919050565b600061100282611024565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b61103a81610f49565b811461104557600080fd5b50565b61105181610f91565b811461105c57600080fd5b5056fea2646970667358221220c2a631bd9872e00d7a09c47d8e012892a5e1ae7509d2a796e84b558388e196c564736f6c63430008000033";

type BridgeEthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeEthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeEth__factory extends ContractFactory {
  constructor(...args: BridgeEthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeEth> {
    return super.deploy(token, overrides || {}) as Promise<BridgeEth>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): BridgeEth {
    return super.attach(address) as BridgeEth;
  }
  connect(signer: Signer): BridgeEth__factory {
    return super.connect(signer) as BridgeEth__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeEthInterface {
    return new utils.Interface(_abi) as BridgeEthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeEth {
    return new Contract(address, _abi, signerOrProvider) as BridgeEth;
  }
}
