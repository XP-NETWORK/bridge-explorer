import dotenv from "dotenv";

dotenv.config();

export const currency: any = {
  "4": "BNB",
  "19": "VLX",
  "14": "xDAI",
  "2": "EGLD",
  "20": "IOTX",
  "16": "Fuse",
  "6": "AVAX",
  "21": "AETH",
  "7": "MATIC",
  "5": "ETH",
  "8": "FTM",
  "12": "ONE",
  "18": "TEZ",
  "23": "GT",
};

export const txExplorers: any = {
  "4": "https://bscscan.com/tx/",
  "19": "https://explorer.velas.com/tx/",
  "14": "https://blockscout.com/xdai/mainnet/tx/",
  "2": "https://explorer.elrond.com/transactions/",
  "20": "https://iotexscan.io/tx/",
  "6": "https://snowtrace.io/tx/",
  "16": "https://explorer.fuse.io/tx/",
  "21": "https://explorer.mainnet.aurora.dev/tx/",
  "7": "https://polygonscan.com/tx/",
  "5": "https://etherscan.io/tx/",
  "8": "https://ftmscan.com/tx/",
  "12": "https://explorer.harmony.one/tx/",
  "18": "https://tezblock.io/transaction/",
  "23": "https://gatescan.org/tx/",
};

export const addressExplorers: any = {
  "4": "https://bscscan.com//address/",
  "19": "https://explorer.velas.com/address/",
  "14": "https://blockscout.com/xdai/mainnet/address/",
  "2": "https://explorer.elrond.com/accounts/",
  "20": "https://iotexscan.io/address/",
  "6": "https://snowtrace.io/address/",
  "16": "https://explorer.fuse.io/address/",
  "21": "https://explorer.mainnet.aurora.dev/address/",
  "7": "https://polygonscan.com/address/",
  "5": "https://etherscan.io/address/",
  "8": "https://ftmscan.com/address/",
  "12": "https://explorer.harmony.one/address/",
  "18": "https://tezblock.io/account/",
  "23": "https://gatescan.org/address/",
};

function getOrThrow(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing env var ${key}`);
  }
  return value;
}

<<<<<<< HEAD
const config = {
  web3: [
    // {
    //   name: "AURORA",
    //   node: getOrThrow("AURORA_RPC_URL"),
    //   contract: getOrThrow("AURORA_MINTER_ADDRESS"),
    //   nonce: getOrThrow("AURORA_NONCE"),
    // },
=======
interface ChainConfig {
  name: string;
  node: string;
  contract: string;
  nonce: string;
  id: string;
}

interface Config {
  web3: ChainConfig[];
  elrond: ChainConfig & { socket: string };
  tezos: ChainConfig & { socket: string; xpnft: string };
  algorand: ChainConfig  & { indexerNode: string; apiKey: string };
  [key: string]: any;
}

const config: Config = {
  web3: [
    {
      name: "AURORA",
      node: getOrThrow("AURORA_RPC_URL"),
      contract: getOrThrow("AURORA_MINTER_ADDRESS"),
      nonce: getOrThrow("AURORA_NONCE"),
      id: "aurora-near",
    },
>>>>>>> main
    {
      name: "BSC",
      node: getOrThrow("BSC_RPC_URL"),
      contract: getOrThrow("BSC_MINTER_ADDRESS"),
      nonce: getOrThrow("BSC_NONCE"),
      id: "binancecoin",
    },
    {
      name: "ETHEREUM",
      node: getOrThrow("ETHEREUM_RPC_URL"),
      contract: getOrThrow("ETHEREUM_MINTER_ADDRESS"),
      nonce: getOrThrow("ETHEREUM_NONCE"),
      id: "ethereum",
    },
<<<<<<< HEAD
    // {
    //   name: "ETHEREUM",
    //   node: getOrThrow("ETHEREUM_RPC_URL"),
    //   contract: getOrThrow("ETHEREUM_MINTER_ADDRESS"),
    //   nonce: getOrThrow("ETHEREUM_NONCE"),
    // },
    // {
    //   name: "VELAS",
    //   node: getOrThrow("VELAS_RPC_URL"),
    //   contract: getOrThrow("VELAS_MINTER_ADDRESS"),
    //   nonce: getOrThrow("VELAS_NONCE"),
    // },
=======
    {
      name: "VELAS",
      node: getOrThrow("VELAS_RPC_URL"),
      contract: getOrThrow("VELAS_MINTER_ADDRESS"),
      nonce: getOrThrow("VELAS_NONCE"),
      id: "velas",
    },
>>>>>>> main
    {
      name: "POLYGON",
      node: getOrThrow("POLYGON_RPC_URL"),
      contract: getOrThrow("POLYGON_MINTER_ADDRESS"),
      nonce: getOrThrow("POLYGON_NONCE"),
      id: "matic-network",
    },
    {
      name: "AVALANCHE",
      node: getOrThrow("AVALANCHE_RPC_URL"),
      contract: getOrThrow("AVALANCHE_MINTER_ADDRESS"),
      nonce: getOrThrow("AVALANCHE_NONCE"),
      id: "avalanche-2",
    },
<<<<<<< HEAD
    // {
    //   name: "IOTEX",
    //   node: getOrThrow("IOTEX_RPC_URL"),
    //   contract: getOrThrow("IOTEX_MINTER_ADDRESS"),
    //   nonce: getOrThrow("IOTEX_NONCE"),
    // },
    // {
    //   name: "FANTOM",
    //   node: getOrThrow("FANTOM_RPC_URL"),
    //   contract: getOrThrow("FANTOM_MINTER_ADDRESS"),
    //   nonce: getOrThrow("FANTOM_NONCE"),
    // },
=======
    {
      name: "IOTEX",
      node: getOrThrow("IOTEX_RPC_URL"),
      contract: getOrThrow("IOTEX_MINTER_ADDRESS"),
      nonce: getOrThrow("IOTEX_NONCE"),
      id: "iotex",
    },
    {
      name: "FANTOM",
      node: getOrThrow("FANTOM_RPC_URL"),
      contract: getOrThrow("FANTOM_MINTER_ADDRESS"),
      nonce: getOrThrow("FANTOM_NONCE"),
      id: "fantom",
    },
>>>>>>> main
    // {
    //   name: "CELO",
    //   node: getOrThrow("CELO_RPC_URL"),
    //   contract: getOrThrow("CELO_MINTER_ADDRESS"),
    //   nonce: getOrThrow("CELO_NONCE")
    // },
    {
      name: "HARMONY",
      node: getOrThrow("HARMONY_RPC_URL"),
      contract: getOrThrow("HARMONY_MINTER_ADDRESS"),
      nonce: getOrThrow("HARMONY_NONCE"),
<<<<<<< HEAD
    },
    // {
    //   name: "GNOSIS",
    //   node: getOrThrow("GNOSIS_RPC_URL"),
    //   contract: getOrThrow("GNOSIS_MINTER_ADDRESS"),
    //   nonce: getOrThrow("GNOSIS_NONCE"),
    // },
    // {
    //    name: "FUSE",
    //    node: getOrThrow("FUSE_RPC_URL"),
    //    contract: getOrThrow("FUSE_MINTER_ADDRESS"),
    //    nonce: getOrThrow("FUSE_NONCE"),
    //  },
=======
      id: "harmony",
    },
    {
      name: "GNOSIS CHAIN",
      node: getOrThrow("GNOSIS_RPC_URL"),
      contract: getOrThrow("GNOSIS_MINTER_ADDRESS"),
      nonce: getOrThrow("GNOSIS_NONCE"),
      id: "gnosis",
    },

    {
      name: "FUSE",
      node: getOrThrow("FUSE_RPC_URL"),
      contract: getOrThrow("FUSE_MINTER_ADDRESS"),
      nonce: getOrThrow("FUSE_NONCE"),
      id: "fuse-network-token",
    },

    {
      name: "GATECHAIN",
      node: getOrThrow("GATECHAIN_RPC_URL"),
      contract: getOrThrow("GATECHAIN_MINTER_ADDRESS"),
      nonce: getOrThrow("GATECHAIN_NONCE"),
      id: "gatechain-wormhole",
    },

>>>>>>> main
    // {
    //   name: "UNIQUE",
    //   node: getOrThrow("UNIQUE_RPC_URL"),
    //   contract: getOrThrow("UNIQUE_MINTER_ADDRESS"),
    //   nonce: getOrThrow("UNIQUE_NONCE"),
    // },
  ],
<<<<<<< HEAD
  // elrond: {
  //   name: "ELROND",
  //   node: getOrThrow("ELROND_RPC_URL"),
  //   contract: getOrThrow("ELROND_MINTER_ADDRESS"),
  //   nonce: getOrThrow("ELROND_NONCE"),
  //   socket: getOrThrow("ELROND_SOCKET_URL"),
  // },
=======
  elrond: {
    name: "ELROND",
    node: getOrThrow("ELROND_RPC_URL"),
    contract: getOrThrow("ELROND_MINTER_ADDRESS"),
    nonce: getOrThrow("ELROND_NONCE"),
    socket: getOrThrow("ELROND_SOCKET_URL"),
    id: "elrond-erd-2",
  },
  tezos: {
    name: "TEZOS",
    node: "",
    socket: getOrThrow("TEZOS_RPC_URL"),
    xpnft: getOrThrow("TEZOS_XPNFT_ADDRESS"),
    contract: getOrThrow("TEZOS_MINTER_ADDRESS"),
    nonce: getOrThrow("TEZOS_NONCE"),
    id: "tezos",
  },
  algorand: {
    name: "ALGORAND",
    node: getOrThrow("ALGORAND_NODE"),
    indexerNode: getOrThrow("ALGORAND_INDEXER"),
    apiKey: getOrThrow("ALGORAND_API_KEY"),
    //socket: getOrThrow("TEZOS_RPC_URL"),
    //xpnft: getOrThrow("TEZOS_XPNFT_ADDRESS"),
    contract: getOrThrow("ALGORAND_APPLICATION"),
    nonce: getOrThrow("ALGORAND_NONCE"),
    id: "algorand",

  },
>>>>>>> main
  db: getOrThrow("DB_URL"),
  indexer_db: getOrThrow("XP_INDEXER_DB"),
  port: getOrThrow("PORT"),
  socketUrl: getOrThrow("SOCKET_URL"),
  type: getOrThrow("type_sheets"),
  project_id: getOrThrow("project_id_sheets"),
  private_key_id: getOrThrow("private_key_id_sheets"),
  private_key: getOrThrow("private_key_sheet"),
  client_email: getOrThrow("client_email_sheet"),
  client_id: getOrThrow("client_id_sheet"),
  auth_uri: getOrThrow("auth_uri_sheet"),
  token_uri: getOrThrow("token_uri_sheet"),
  auth_provider_x509_cert_url: getOrThrow("auth_provider_x509_cert_url"),
  client_x509_cert_url: getOrThrow("client_x509_cert_url"),
  mail_key: getOrThrow("SENDING_BLUE"),
  captcha_secret: getOrThrow("SECRET_CAPTCHA"),
  web3socketUrl: getOrThrow("WEB3_SOCKET_URL"),
};

export function chainNonceToName(nonce: string) {
  let chain = config.web3.find((chain) => chain.nonce === nonce);
  console.log(nonce, '----', chain?.name);
  if (chain) return chain.name;

<<<<<<< HEAD
  return chain
    ? chain.name
    : // : config.elrond.nonce === nonce
      // ? config.elrond.name
      "UNKNOWN";
=======
  for (const key of ["elrond", "tezos"]) {
    //@ts-ignore
    if (nonce == config[key].nonce) {
      //@ts-ignore
      return config[key].name;
    }
  }

  return "UNKNOWN";
>>>>>>> main
}

console.log(chainNonceToName("23"));

export const chainNonceToId = (nonce: string) => {
  let chain = config.web3.find((chain) => chain.nonce === nonce);

  return chain?.id || "unknown";
};

export default config;
//0x5B916EFb0e7bc0d8DdBf2d6A9A7850FdAb1984C4
