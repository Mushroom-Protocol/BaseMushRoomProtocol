import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Types "./types/Typesgen";

actor class Backend() {
	type NFTId = Nat32;
	stable var NftId: NFTId = 0;

private func generateNftId() : Nat32 {
		NftId += 1;
		return NftId;
	};

	public query ({caller}) func whoami() : async Principal {
		return caller;
	};

};
