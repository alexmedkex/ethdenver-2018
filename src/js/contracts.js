if(!contracts) var contracts={};
if(!contracts['Articles']) contracts['Articles']={blockchain: 'ethereum', network: 'local'};
contracts['Articles'].abi=[{"constant":true,"inputs":[],"name":"numArticles","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getArticle","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"title","type":"string"},{"name":"hash","type":"string"}],"name":"publish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"givenAuthor","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
contracts['Articles'].bin='0x6060604052341561000f57600080fd5b6040516020806108818339810160405280805190602001909190505060008173ffffffffffffffffffffffffffffffffffffffff161415151561005157600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061079f806100e26000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063734f8482146100725780638da5cb5b1461009b578063a6c3e6b9146100f0578063bd85d86714610145578063c163bba71461024d575b600080fd5b341561007d57600080fd5b6100856102ed565b6040518082815260200191505060405180910390f35b34156100a657600080fd5b6100ae6102f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100fb57600080fd5b610103610318565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015057600080fd5b610166600480803590602001909190505061033e565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561025857600080fd5b6102eb600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506104cf565b005b60025481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103466105c7565b61034e6105c7565b60038381548110151561035d57fe5b906000526020600020906002020160000160038481548110151561037d57fe5b9060005260206000209060020201600101818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b5050505050905091509150915091565b6104d76105db565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561053357600080fd5b60408051908101604052808481526020018381525090506003805480600101828161055e9190610601565b916000526020600020906002020160008390919091506000820151816000019080519060200190610590929190610633565b5060208201518160010190805190602001906105ad929190610633565b505050506001600260008282540192505081905550505050565b602060405190810160405280600081525090565b60408051908101604052806105ee6106b3565b81526020016105fb6106b3565b81525090565b81548183558181151161062e5760020281600202836000526020600020918201910161062d91906106c7565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061067457805160ff19168380011785556106a2565b828001600101855582156106a2579182015b828111156106a1578251825591602001919060010190610686565b5b5090506106af9190610706565b5090565b602060405190810160405280600081525090565b61070391905b808211156106ff57600080820160006106e6919061072b565b6001820160006106f6919061072b565b506002016106cd565b5090565b90565b61072891905b8082111561072457600081600090555060010161070c565b5090565b90565b50805460018160011615610100020316600290046000825580601f106107515750610770565b601f01602090049060005260206000209081019061076f9190610706565b5b505600a165627a7a723058205939f2a61dbb9ce760fb7b7815119a5c865ec67a4d74cc6ad20126d78a9063370029';
contracts['Articles'].address='0x5032aa406bf10d35501c29c59c6a977b6b30c8e6';
contracts['Articles'].account_name='DEPLOY';
contracts['Articles'].account_address='0x8833af1a9b1e7ddc837ed2c771078dcf3ac23daf';
