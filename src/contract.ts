
import { OwnerSet as OwnerSetEvent, ImplementationSet as ImplementationSetEvent } from "../generated/Contract/Contract";
import { OwnerEntity, ImplementationEntity, Transaction } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleOwnerSet(event: OwnerSetEvent): void {
  let transaction = new Transaction(event.transaction.hash.toHex());
  transaction.blockNumber = event.block.number;
  transaction.timestamp = event.block.timestamp;
  transaction.owner = event.params.newOwner.toHex();
  transaction.save();

  let ownerSet = new OwnerEntity(event.transaction.hash.toHex());
  ownerSet.newOwner = event.params.newOwner.toHex();
  ownerSet.transaction = transaction.id;
  ownerSet.save();
}

export function handleImplementationSet(event: ImplementationSetEvent): void {
  let transaction = new Transaction(event.transaction.hash.toHex());
  transaction.blockNumber = event.block.number;
  transaction.timestamp = event.block.timestamp;
  transaction.owner = event.params.newImplementation.toHex();
  transaction.save();

  let implementationSet = new ImplementationEntity(event.transaction.hash.toHex());
  implementationSet.newImplementation = event.params.newImplementation.toHex();
  implementationSet.transaction = transaction.id;
  implementationSet.save();
}

