
import {
    TypedMap,
    Entity,
    Value,
    ValueKind,
    store,
    Bytes,
    BigInt,
    BigDecimal,
  } from "@graphprotocol/graph-ts";
  
  export class OwnerSet extends Entity {
    constructor(id: Bytes) {
      super();
      this.set("id", Value.fromBytes(id));
    }
  
    save(): void {
      let id = this.get("id");
      assert(id != null, "Cannot save OwnerSet entity without an ID");
      if (id) {
        assert(
          id.kind == ValueKind.BYTES,
          `Entities of type OwnerSet must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
        );
        store.set("OwnerSet", id.toBytes().toHexString(), this);
      }
    }
  
    static loadInBlock(id: Bytes): OwnerSet | null {
      return changetype<OwnerSet | null>(
        store.get_in_block("OwnerSet", id.toHexString()),
      );
    }
  
    static load(id: Bytes): OwnerSet | null {
      return changetype<OwnerSet | null>(store.get("OwnerSet", id.toHexString()));
    }
  
    get id(): Bytes {
      let value = this.get("id");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBytes();
      }
    }
  
    set id(value: Bytes) {
      this.set("id", Value.fromBytes(value));
    }
  
    get owner(): Bytes {
      let value = this.get("owner");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBytes();
      }
    }
  
    set owner(value: Bytes) {
      this.set("owner", Value.fromBytes(value));
    }
  
    get blockNumber(): BigInt {
      let value = this.get("blockNumber");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBigInt();
      }
    }
  
    set blockNumber(value: BigInt) {
      this.set("blockNumber", Value.fromBigInt(value));
    }
  
    get blockTimestamp(): BigInt {
      let value = this.get("blockTimestamp");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBigInt();
      }
    }
  
    set blockTimestamp(value: BigInt) {
      this.set("blockTimestamp", Value.fromBigInt(value));
    }
  
    get transactionHash(): Bytes {
      let value = this.get("transactionHash");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBytes();
      }
    }
  
    set transactionHash(value: Bytes) {
      this.set("transactionHash", Value.fromBytes(value));
    }
  }
  
  export class ImplementationSet extends Entity {
    constructor(id: Bytes) {
      super();
      this.set("id", Value.fromBytes(id));
    }
  
    save(): void {
      let id = this.get("id");
      assert(id != null, "Cannot save ImplementationSet entity without an ID");
      if (id) {
        assert(
          id.kind == ValueKind.BYTES,
          `Entities of type ImplementationSet must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
        );
        store.set("ImplementationSet", id.toBytes().toHexString(), this);
      }
    }
  
    static loadInBlock(id: Bytes): ImplementationSet | null {
      return changetype<ImplementationSet | null>(
        store.get_in_block("ImplementationSet", id.toHexString()),
      );
    }
  
    static load(id: Bytes): ImplementationSet | null {
      return changetype<ImplementationSet | null>(
        store.get("ImplementationSet", id.toHexString()),
      );
    }
  
    get id(): Bytes {
      let value = this.get("id");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBytes();
      }
    }
  
    set id(value: Bytes) {
      this.set("id", Value.fromBytes(value));
    }
  
    get implementation(): Bytes {
      let value = this.get("implementation");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBytes();
      }
    }
  
    set implementation(value: Bytes) {
      this.set("implementation", Value.fromBytes(value));
    }
  
    get blockNumber(): BigInt {
      let value = this.get("blockNumber");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBigInt();
      }
    }
  
    set blockNumber(value: BigInt) {
      this.set("blockNumber", Value.fromBigInt(value));
    }
  
    get blockTimestamp(): BigInt {
      let value = this.get("blockTimestamp");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBigInt();
      }
    }
  
    set blockTimestamp(value: BigInt) {
      this.set("blockTimestamp", Value.fromBigInt(value));
    }
  
    get transactionHash(): Bytes {
      let value = this.get("transactionHash");
      if (!value || value.kind == ValueKind.NULL) {
        throw new Error("Cannot return null for a required field.");
      } else {
        return value.toBytes();
      }
    }
  
    set transactionHash(value: Bytes) {
      this.set("transactionHash", Value.fromBytes(value));
    }
  }
  
