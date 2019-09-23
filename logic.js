/**
 * Make an Offer for a ProductListing
 * @param {org.example.biznet.BuyerList} soldTo
 * @transaction
 */
async function SellMedicalRecord(soldTo) {
 
    var medicalrecord = soldTo.medicalrecord;
    console.log('@debug medicalrecord value is' , medicalrecord);
   
    return getAssetRegistry('org.example.biznet.MedicalRecord').then(function(assetRegistry) {
       console.log('@debug medicalrecord BEFORE value is' , medicalrecord.buyers);
      // save the product listing
      if (typeof medicalrecord.buyers == 'undefined') { // Check if the array is empty
          medicalrecord.buyers = new Array();
           medicalrecord.buyers[0] = soldTo;
      }
      else {
          medicalrecord.buyers.push(soldTo);
      }
      console.log('@debug medicalrecord AFTER value is' , medicalrecord.buyers);
      return assetRegistry.update(medicalrecord);
    });
  }