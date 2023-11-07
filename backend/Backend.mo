import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Types "./types/Typesgen";
import List "mo:base/List";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Bool "mo:base/Bool";


actor class Backend() {
	type NFTId = Nat32;
	stable var NftId: NFTId = 0;
    type Identity = Principal;
 

    let website: Text = "mushroomprotocol.io";
    var message: Text = "Bienvenido a MushRoom Protocol";

     public query func getMessage1(): async Text {
        return message;
    };

    public func changeMessage(newMessage: Text): async () {
        message := newMessage;
    };


	public query ({caller}) func whoami() : async Principal {
		return caller;
	};

};
