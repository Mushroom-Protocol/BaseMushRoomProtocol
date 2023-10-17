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
  let listaDeIdentidades : Buffer.Buffer<Text> = Buffer.Buffer<Text>(5);
  let miIdentidad: Text = "yntkk-7zjdu-xwlcq-kofb6-tbdou-mlpjd-it25q-cbv42-ox2qr-qkjfc-qqe!";
  listaDeIdentidades.add(miIdentidad);


  public func permitirAcceso(identidad: Text): async () {
   listaDeIdentidades.add(identidad);
  };

  public shared(msg) func verificarAcceso(identidad: Text): async Bool {
	//let accesoPermitido = Buffer.indexOf<Text>(identidad, listaDeIdentidades, Text.equal);
	let accesoPermitido: Bool = Buffer.contains<Text>(listaDeIdentidades, identidad, Text.equal);
	return accesoPermitido;
    };
	
private func generateNftId() : Nat32 {
		NftId += 1;
		return NftId;
	};

	public query ({caller}) func whoami() : async Principal {
		return caller;
	};

};
