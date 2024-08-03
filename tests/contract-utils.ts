import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { OwnerSet, ImplementationSet } from "../generated/Contract/Contract"

export function createOwnerSetEvent(owner: Address): OwnerSet {
  let ownerSetEvent = changetype<OwnerSet>(newMockEvent())

  ownerSetEvent.parameters = new Array()

  ownerSetEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerSetEvent
}

export function createImplementationSetEvent(
  implementation: Address
): ImplementationSet {
  let implementationSetEvent = changetype<ImplementationSet>(newMockEvent())

  implementationSetEvent.parameters = new Array()

  implementationSetEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return implementationSetEvent
}
