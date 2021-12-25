/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenBsc, TokenBscInterface } from "../TokenBsc";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "updateAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f42534320546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f42544b00000000000000000000000000000000000000000000000000000000008152508181816003908051906020019062000098929190620000fd565b508060049080519060200190620000b1929190620000fd565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000212565b8280546200010b90620001ad565b90600052602060002090601f0160209004810192826200012f57600085556200017b565b82601f106200014a57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017a5782518255916020019190600101906200015d565b5b5090506200018a91906200018e565b5090565b5b80821115620001a95760008160009055506001016200018f565b5090565b60006002820490506001821680620001c657607f821691505b60208210811415620001dd57620001dc620001e3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611b9680620002226000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb1461029a578063dd62ed3e146102ca578063e2f273bd146102fa578063f851a44014610316576100f5565b806370a082311461020057806395d89b41146102305780639dc29fac1461024e578063a457c2d71461026a576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610334565b60405161010f91906117ab565b60405180910390f35b610132600480360381019061012d91906112ae565b6103c6565b60405161013f9190611790565b60405180910390f35b6101506103e4565b60405161015d919061192d565b60405180910390f35b610180600480360381019061017b919061125f565b6103ee565b60405161018d9190611790565b60405180910390f35b61019e6104e6565b6040516101ab9190611948565b60405180910390f35b6101ce60048036038101906101c991906112ae565b6104ef565b6040516101db9190611790565b60405180910390f35b6101fe60048036038101906101f991906112ae565b61059b565b005b61021a600480360381019061021591906111fa565b610639565b604051610227919061192d565b60405180910390f35b610238610681565b60405161024591906117ab565b60405180910390f35b610268600480360381019061026391906112ae565b610713565b005b610284600480360381019061027f91906112ae565b6107b1565b6040516102919190611790565b60405180910390f35b6102b460048036038101906102af91906112ae565b61089c565b6040516102c19190611790565b60405180910390f35b6102e460048036038101906102df9190611223565b6108ba565b6040516102f1919061192d565b60405180910390f35b610314600480360381019061030f91906111fa565b610941565b005b61031e610a15565b60405161032b9190611775565b60405180910390f35b60606003805461034390611a91565b80601f016020809104026020016040519081016040528092919081815260200182805461036f90611a91565b80156103bc5780601f10610391576101008083540402835291602001916103bc565b820191906000526020600020905b81548152906001019060200180831161039f57829003601f168201915b5050505050905090565b60006103da6103d3610a3b565b8484610a43565b6001905092915050565b6000600254905090565b60006103fb848484610c0e565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610446610a3b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bd9061184d565b60405180910390fd5b6104da856104d2610a3b565b858403610a43565b60019150509392505050565b60006012905090565b60006105916104fc610a3b565b84846001600061050a610a3b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461058c919061197f565b610a43565b6001905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461062b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610622906118cd565b60405180910390fd5b6106358282610e8f565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461069090611a91565b80601f01602080910402602001604051908101604052809291908181526020018280546106bc90611a91565b80156107095780601f106106de57610100808354040283529160200191610709565b820191906000526020600020905b8154815290600101906020018083116106ec57829003601f168201915b5050505050905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079a906118cd565b60405180910390fd5b6107ad8282610fef565b5050565b600080600160006107c0610a3b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561087d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610874906118ed565b60405180910390fd5b610891610888610a3b565b85858403610a43565b600191505092915050565b60006108b06108a9610a3b565b8484610c0e565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c8906118cd565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ab3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaa906118ad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1a9061180d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c01919061192d565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c759061188d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce5906117cd565b60405180910390fd5b610cf98383836111c6565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d769061182d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e12919061197f565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e76919061192d565b60405180910390a3610e898484846111cb565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef69061190d565b60405180910390fd5b610f0b600083836111c6565b8060026000828254610f1d919061197f565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f72919061197f565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fd7919061192d565b60405180910390a3610feb600083836111cb565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561105f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110569061186d565b60405180910390fd5b61106b826000836111c6565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156110f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e8906117ed565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461114891906119d5565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111ad919061192d565b60405180910390a36111c1836000846111cb565b505050565b505050565b505050565b6000813590506111df81611b32565b92915050565b6000813590506111f481611b49565b92915050565b60006020828403121561120c57600080fd5b600061121a848285016111d0565b91505092915050565b6000806040838503121561123657600080fd5b6000611244858286016111d0565b9250506020611255858286016111d0565b9150509250929050565b60008060006060848603121561127457600080fd5b6000611282868287016111d0565b9350506020611293868287016111d0565b92505060406112a4868287016111e5565b9150509250925092565b600080604083850312156112c157600080fd5b60006112cf858286016111d0565b92505060206112e0858286016111e5565b9150509250929050565b6112f381611a09565b82525050565b61130281611a1b565b82525050565b600061131382611963565b61131d818561196e565b935061132d818560208601611a5e565b61133681611b21565b840191505092915050565b600061134e60238361196e565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113b460228361196e565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061141a60228361196e565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061148060268361196e565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114e660288361196e565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b600061154c60218361196e565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115b260258361196e565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061161860248361196e565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061167e600a8361196e565b91507f4f4e4c595f4f574e4552000000000000000000000000000000000000000000006000830152602082019050919050565b60006116be60258361196e565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611724601f8361196e565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b61176081611a47565b82525050565b61176f81611a51565b82525050565b600060208201905061178a60008301846112ea565b92915050565b60006020820190506117a560008301846112f9565b92915050565b600060208201905081810360008301526117c58184611308565b905092915050565b600060208201905081810360008301526117e681611341565b9050919050565b60006020820190508181036000830152611806816113a7565b9050919050565b600060208201905081810360008301526118268161140d565b9050919050565b6000602082019050818103600083015261184681611473565b9050919050565b60006020820190508181036000830152611866816114d9565b9050919050565b600060208201905081810360008301526118868161153f565b9050919050565b600060208201905081810360008301526118a6816115a5565b9050919050565b600060208201905081810360008301526118c68161160b565b9050919050565b600060208201905081810360008301526118e681611671565b9050919050565b60006020820190508181036000830152611906816116b1565b9050919050565b6000602082019050818103600083015261192681611717565b9050919050565b60006020820190506119426000830184611757565b92915050565b600060208201905061195d6000830184611766565b92915050565b600081519050919050565b600082825260208201905092915050565b600061198a82611a47565b915061199583611a47565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119ca576119c9611ac3565b5b828201905092915050565b60006119e082611a47565b91506119eb83611a47565b9250828210156119fe576119fd611ac3565b5b828203905092915050565b6000611a1482611a27565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611a7c578082015181840152602081019050611a61565b83811115611a8b576000848401525b50505050565b60006002820490506001821680611aa957607f821691505b60208210811415611abd57611abc611af2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611b3b81611a09565b8114611b4657600080fd5b50565b611b5281611a47565b8114611b5d57600080fd5b5056fea2646970667358221220f7991cceabb1b3c7cfd0437faf76943303486b8fdba892aa6f6dc5d240b501a564736f6c63430008000033";

type TokenBscConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenBscConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenBsc__factory extends ContractFactory {
  constructor(...args: TokenBscConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenBsc> {
    return super.deploy(overrides || {}) as Promise<TokenBsc>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenBsc {
    return super.attach(address) as TokenBsc;
  }
  connect(signer: Signer): TokenBsc__factory {
    return super.connect(signer) as TokenBsc__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenBscInterface {
    return new utils.Interface(_abi) as TokenBscInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenBsc {
    return new Contract(address, _abi, signerOrProvider) as TokenBsc;
  }
}
