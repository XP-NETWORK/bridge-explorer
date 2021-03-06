import config from "../../config";
import { io } from "socket.io-client";
import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { BigNumber } from "bignumber.js";
import { eventHandler, executedEventHandler } from "../../handlers/index";
import { handleBridgeEvent } from "./handleBridgeEvent";
// import { validateEvmTransaction } from "./validateTransaction"

interface IContractEventListener {
  listenBridge(): void;
}

const executedSocket = io(config.socketUrl);
const web3socket = io(config.web3socketUrl);

export function EvmEventService(em: EntityManager<IDatabaseDriver<Connection>>): IContractEventListener {
  return {
    listenBridge: async () => {
      console.log("listen --NOTIFIER--");
      web3socket.on(
        "web3:bridge_tx",
        async (
          fromChain: number,
          fromHash: string,
          actionId?: string,
          type?: "Transfer" | "Unfreeze",
          toChain?: number,
          txFees?: BigNumber,
          senderAddress?: string,
          targetAddress?: string,
          nftUri?: string,
          eventTokenId?: string,
          eventContract?: string
        ) => {
          console.log("evm.ts line 37 -web3:bridge_tx")
          console.log(fromChain,
            fromHash,
            actionId,
            type,
            toChain,
            txFees,
            senderAddress,
            targetAddress,
            nftUri,
            eventTokenId,
            eventContract)

          // const ifFromHashIsReal = await validateEvmTransaction(fromHash, fromChain)
          // if(!ifFromHashIsReal)return;

          const eventData = await handleBridgeEvent({
            fromChain,
            fromHash,
            actionId,
            type,
            toChain,
            txFees,
            senderAddress,
            targetAddress,
            nftUri,
            eventTokenId,
            eventContract,
          });

          eventData && eventHandler(em.fork())(eventData);
        }
      );

      executedSocket.on(
        "tx_executed_event",
        async (
          fromChain: number,
          toChain: number,
          action_id: string,
          hash: string
        ) => {
          console.log("evm.ts line 75 - tx_executed_event")
          console.log(fromChain,
            toChain,
            action_id,
            hash)
          if (!fromChain || !config.web3.map(c => c.nonce).includes(String(fromChain)))
            return;

          executedEventHandler(
            em.fork(),
            String(fromChain)
          )({
            fromChain,
            toChain,
            action_id,
            hash,
          });
        })
    },
  };
}
