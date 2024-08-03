import {
  OwnerSet as OwnerSetEvent,
  ImplementationSet as ImplementationSetEvent
} from "../generated/Contract/Contract"
import { OwnerSet, ImplementationSet } from "../generated/schema"

export function handleOwnerSet(event: OwnerSetEvent): void {
  let entity = new OwnerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleImplementationSet(event: ImplementationSetEvent): void {
  let entity = new ImplementationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
