 Verifying transaction: b'72d3fdb090dedcabab2d8a960a3a9c75569212b251b70e668f921df200af872f'
[I 180717 16:21:10 EventHub:62] [SmartContract.Verification.Success][9551] [fd1c290a7492c0db33b7f2b91dda4d1862275be0] [tx 72d3fdb090dedcabab2d8a960a3a9c75569212b251b70e668f921df200af872f] {'type': 'Array', 'value': [{'type': 'Boolean', 'value': True}]}
Relayed Tx: 72d3fdb090dedcabab2d8a960a3a9c75569212b251b70e668f921df200af872f



open wallet ./neo-privnet.wallet
build /smart-contracts/domaincontract.py
import contract /smart-contracts/operations.avm 070502 02 True False

build /smart-contracts/comment.py
import contract /smart-contracts/comment.avm 070502 02 True False
