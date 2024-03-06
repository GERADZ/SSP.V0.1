
    

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, setDoc, getDocs, getDoc, doc, collection, addDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: "AIzaSyBgGXJoqe-stLcxVS7uERM6l3SOtu1Ez5Y",
authDomain: "gera-6e9ee.firebaseapp.com",
projectId: "gera-6e9ee",
storageBucket: "gera-6e9ee.appspot.com",
messagingSenderId: "331888265233",
appId: "1:331888265233:web:22f3ec6417d6b8ff3a49b0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const collectionName = "users"; // Specify the collection name where you want to store user data
const db = getFirestore(app);
const bdCollectionName = "Base de Donnees"; 
const colRef = collection(db, collectionName);
let selectedSite1 = [];
let selectedSite_ = [];
let selectedbd_ = [];









auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userName = user.displayName;
        const userEmail = user.email; 

        // Display user data on the profile page
        document.getElementById("user-name").textContent =  userName;
        document.getElementById("user-email").textContent =   userEmail;

        // Show the services container
        addDataNavbar.style.display ="block";
        locationsNavbar.style.display="block";
        project_bar_btn.style.display="block";
        Payment_bar_btn.style.display="block";
        Accountbarbtn.style.display="block";
        login_bar_btn.style.display="none";


        
    } else {

        document.getElementById("user-name").textContent =  "ERROR";
        document.getElementById("user-email").textContent =   "ERROR";
         // Show the services container
         addDataNavbar.style.display ="none";
         locationsNavbar.style.display="none";
         project_bar_btn.style.display="none";
         Payment_bar_btn.style.display="none";
         Accountbarbtn.style.display="none";
         login_bar_btn.style.display="block";
         content_Nav.style.width="200px";



    }
});



    
    
    
    // Initialize map
    const nameLocation_input = document.getElementById('nameLocation');
    const longitude_input = document.getElementById('longitude');
    const latitude_input = document.getElementById('latitude');
    //auto inputs 
    const nameLocationAUT_input = document.getElementById('nameLocationimport');
    const longitudeAUT_input = document.getElementById('longitudeimport');
    const latitudeAUT_input = document.getElementById('latitudeimport');
    const Payment_bar_btn = document.getElementById("Payment_bar_btn");
    const login_bar_btn = document.getElementById("login_bar_btn");
    const content_Nav = document.getElementById("content_Nav");



    var map = L.map('map').setView([36.712433784081746, 3.1809217870661266], 13);

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add a marker to the map
    var marker = L.marker([36.712433784081746, 3.1809217870661266]).addTo(map);
    marker.bindPopup("<b>Hello in SSP !</b><br>SUN SELECT PRO").openPopup();



    map.on('click', function(e) {
        var latitude = e.latlng.lat;
        var longitude = e.latlng.lng;
        //manuelle
        longitude_input.value = `${longitude}`;
        latitude_input.value = `${latitude}`;
        // automatic
        longitudeAUT_input.value = `${longitude}`;
        latitudeAUT_input.value = `${latitude}`;
    
        // Reverse geocode to get the name of the location
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            var locationName = data.display_name;
            // Set the name of the location input field
            //manu
            nameLocation_input.value = locationName;
            //auto
            nameLocationAUT_input.value = locationName;

        });
    
        if (marker) {
            // If a marker exists, remove it
            map.removeLayer(marker);
        }
    
        marker = L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Latitude: ' + latitude + '<br>Longitude: ' + longitude)
            .openPopup();
    
        map.flyTo([latitude, longitude], 14, {
            duration: 2  // Adjust the duration (in seconds) for the animation as needed
        });
    });
    





//////////////////////////////////////////////////////////////

  // boxs in home

  
  const addDataNavbar = document.getElementById('addDataNavbar');
  
  addDataNavbar.addEventListener('click', function() {
    addDataSelect.style.display = "block";
    //close :
    addDatManuSite.style.display = "none";
    addDatAutoSite.style.display = "none";
    locationdata.style.display = "none";
    paymentmeth.style.display = "none";
    CreatprojectSelect.style.display = "none";

});
  


    // select type of inpotation data box
    
    const movableDivs = [
        document.getElementById('addDataSelect'),
        document.getElementById('addDatManuSite'),
        document.getElementById('locationdata'),
        document.getElementById('addDatAutoSite')

      ];
      
      let isDragging = false;
      let offsetX, offsetY;
      
      // Add event listeners for each movable div
      movableDivs.forEach(function(div) {
        div.addEventListener('mousedown', startDragging);
      });
      
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDragging);
      
      function startDragging(e) {
        isDragging = true;
        offsetX = e.clientX - this.getBoundingClientRect().left;
        offsetY = e.clientY - this.getBoundingClientRect().top;
      }
      
      function drag(e) {
        if (isDragging) {
          movableDivs.forEach(function(div) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            div.style.left = x + 'px';
            div.style.top = y + 'px';
          });
        }
      }
      
      function stopDragging() {
        isDragging = false;
      }
      














        // Get select element
  const addDataTypaSelect = document.getElementById('addDataTypaSelect');

  // Get divs to be hidden
  const addDataSelect = document.getElementById('addDataSelect');
  const addDatManuSite = document.getElementById('addDatManuSite');
  const addDatAutoSite = document.getElementById('addDatAutoSite');



  // Add event listener for changes in select element
  addDataTypaSelect.addEventListener('change', function() {
    // Hide or show divs based on selected option
    if (addDataTypaSelect.value === '1') {
      addDataSelect.style.display = 'none';
      addDatManuSite.style.display = 'block'; 
    } else if (addDataTypaSelect.value === '2') {
       addDataSelect.style.display = 'none'; 
       addDatAutoSite.style.display = 'block'; 
    }
  });


  // Get check element
 const myCheckbox = document.getElementById('myCheckbox');
 const addLocationINFO = document.getElementById('addLocationINFO');
 const editLocationINFO = document.getElementById('editLocationINFO');
 const deletLocationINFO = document.getElementById('deletLocationINFO');
 const sle = document.getElementById('sle');


 myCheckbox.addEventListener('change', function() {
    // Check if checkbox is checked
    if (myCheckbox.checked) {
      editLocationINFO.style.display = 'flex';
      deletLocationINFO.style.display = 'flex';
      sle.style.display = 'flex';
      addLocationINFO.style.display = 'none';

    } else {
      editLocationINFO.style.display = 'none';
      deletLocationINFO.style.display = 'none';
      sle.style.display = 'none';
      addLocationINFO.style.display = 'flex';

    }
  });

  const addDataSelectCancel = document.getElementById("addDataSelectCancel");
  const addDatManuSiteCancel = document.getElementById("addDatManuSiteCancel");
  const addDatAutoSiteCancel = document.getElementById("addDatAutoSiteCancel");

  
  addDataSelectCancel.addEventListener('click', function() {
    addDataSelect.style.display = "none";
});

  addDatManuSiteCancel.addEventListener('click', function() {
    addDatManuSite.style.display = "none";
    addDataSelect.style.display = "block";
});
addDatAutoSiteCancel.addEventListener('click', function() {
    addDatAutoSite.style.display = "none";
    addDataSelect.style.display = "block";
});
const paymentmethCancel = document.getElementById("paymentmethCancel");
const paymentmeth = document.getElementById("paymentmeth");

paymentmethCancel.addEventListener('click', function() {
    paymentmeth.style.display = "none";
});
Payment_bar_btn.addEventListener('click', function() {
    paymentmeth.style.display = "block";
    //close :
    addDatManuSite.style.display = "none";
    addDatAutoSite.style.display = "none";
    addDataSelect.style.display = "none";
    CreatprojectSelect.style.display = "none";
});






document.addEventListener("DOMContentLoaded", function() {
const saveSiteBtn = document.getElementById("importLocationINFO");
var userId;

saveSiteBtn.addEventListener("click", function() {
saveSiteBtn.disabled = true;
const wait = document.getElementById("wait");
wait.style.display="block";
const importingText1 = document.getElementById("importingText1");
importingText1.style.display="block";

const nameInput = document.getElementById("nameLocationimport").value;
const bdName = 'NASA SSE';
const latitude = document.getElementById("latitudeimport").value;
const longitude = document.getElementById("longitudeimport").value;

const url = `https://power.larc.nasa.gov/api/temporal/monthly/point?start=2015&end=2020&latitude=${latitude}&longitude=${longitude}&community=ag&parameters=ALLSKY_SFC_SW_DNI&format=json&user=med&header=true&time-standard=lst`;

var monthsData = [12];
var monthsData1 = [12];
const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];

fetch(url)
    .then(response => response.json())
    .then(data => {
        var allData = data.properties.parameter.ALLSKY_SFC_SW_DNI;
        console.log(data);
        for (let i = 0; i < 12; i++) {
            var sum = 0;
            var sum2 = 0;
            for (let j = 0; j < 6; j++) {
                var y = 2015 + j;
                var s = y + months[i];
                sum = sum + parseFloat(allData[s]);
                console.log(" ="+sum);


            }
            for (let j = 2; j < 6; j++) {
                var y = 2015 + j;
                var s = y + months[i];
                sum2 = sum2 + parseFloat(allData[s]);
            }

            var sumM = sum*0.27*30;
            var sumM2 = sum2*0.27*30;

            console.log(" -----sum 1 ="+sum);
            console.log(" -----sum 2 ="+sum2);


            monthsData[i] = (sumM/6).toFixed(0);
            monthsData1[i] = (sumM2/4).toFixed(0);
            console.log(monthsData);
            console.log(monthsData1);
        }
    })
    .then(() => {
        // Call auth.onAuthStateChanged after the fetch is complete
        auth.onAuthStateChanged((user) => {
            if(user){
                userId = user.uid;
                var siteId;
                const userRef = doc(db, collectionName, userId);
                
                addDoc(collection(userRef, "sites"), {
                    Name: nameInput,
                    Latitude: latitude,
                    Longitude: longitude
                })
                .then((docRef) => {
                    siteId  = docRef.id;
                    const importingText2 = document.getElementById("importingText2");
                    importingText2.style.display="block";
                    console.log("site added successfuly ",siteId);

                    const siteDocRef = doc(db, collectionName, userId, "sites", siteId);
                    addDoc(collection(siteDocRef, bdCollectionName), {
                        Name: "PvGis",
                        month1: monthsData1[0],
                        month2: monthsData1[1],
                        month3: monthsData1[2],
                        month4: monthsData1[3],
                        month5: monthsData1[4],
                        month6: monthsData1[5],
                        month7: monthsData1[6],
                        month8: monthsData1[7],
                        month9: monthsData1[8],
                        month10: monthsData1[9],
                        month11: monthsData1[10],
                        month12: monthsData1[11],
                    })
                    addDoc(collection(siteDocRef, bdCollectionName), {
                        Name: bdName,
                        month1: monthsData[0],
                        month2: monthsData[1],
                        month3: monthsData[2],
                        month4: monthsData[3],
                        month5: monthsData[4],
                        month6: monthsData[5],
                        month7: monthsData[6],
                        month8: monthsData[7],
                        month9: monthsData[8],
                        month10: monthsData[9],
                        month11: monthsData[10],
                        month12: monthsData[11],
                    })
                    .then(() => {
                        const importingText3 = document.getElementById("importingText3");
                        importingText3.style.display="block";
                        console.log("Nasa SSE added successfully to site ", siteId);
                    }).then(() => {
                        const importingText4 = document.getElementById("importingText4");
                        importingText4.style.display="block";
                        wait.style.display="none";
                        console.log("done");
                                                
                        setTimeout(() => {
                            const importingText3 = document.getElementById("importingText3");
                            importingText1.style.display="none";
                            importingText2.style.display="none";
                            importingText3.style.display="none";
                            importingText4.style.display="none";
                            saveSiteBtn.disabled = false;

                        }, 3000); // 3000 milliseconds = 3 seconds
                    })
                })   
            }
        });
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
    });
});
});



///////////////////./////////////////////////////./////////////////

const mydatalocationselect = document.getElementById("mydatalocationselect");


        // Function to populate the selector with sites from Firestore
     
        function populateSiteSelector() {
            auth.onAuthStateChanged(async (user) => {
                if(user){
                    const userId = user.uid;
                    const userRef = doc(db, collectionName, userId);
                    const siteDataRef = collection(userRef, "sites");
                    const querySnapshot = await getDocs(siteDataRef);

                    querySnapshot.forEach((doc) => {
                        const siteName = doc.data().Name; // Assuming you have a field called "name" in your city documents
                        const siteId = doc.id;
                        const option = document.createElement("option");
                        option.value = siteId;
                        option.text = siteName;
                        mydatalocationselect.appendChild(option);
                        
                    });
                    
                }
            });
        }

        // Event listener for when the user selects a city
        mydatalocationselect.addEventListener("change", (event) => {
            
            const selectedsite = mydatalocationselect.options[mydatalocationselect.selectedIndex];
            selectedSite1 = {
                siteName : selectedsite.text,
                siteId : selectedsite.value
    
            }; 

            console.log("Selected City Name: " + selectedsite.text);
            console.log("Selected City ID: " + selectedsite.value);
            
            auth.onAuthStateChanged(async (user) => {
                if(user){
                    const nameLocation = document.getElementById("nameLocation");
                    const longitude_input = document.getElementById("longitude");
                    const Latitude_input = document.getElementById("latitude");


                    const userId = user.uid;
                    const siteData = doc(db, collectionName, userId, "sites", selectedsite.value);

                    getDoc(siteData).then((docSnapshot) => {
                    const data = docSnapshot.data();
                    console.log("Data from nested document:", data);
                    nameLocation.value = selectedSite1["siteName"];
                    Latitude_input.value = data["Latitude"];
                    longitude_input.value = data["Longitude"];

                    var latitude = Latitude_input.value;
                    var longitude = longitude_input.value ;

                    if (!isNaN(latitude) && !isNaN(longitude) && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180) {
                        if (marker) {
                            // If a marker exists, remove it
                            map.removeLayer(marker);
                        }
                    
                        marker = L.marker([latitude, longitude]).addTo(map)
                            .bindPopup('Latitude: ' + latitude + '<br>Longitude: ' + longitude)
                            .openPopup();


                            map.flyTo([latitude, longitude], 14, {
                                duration: 2  // Adjust the duration (in seconds) for the animation as needed
                            });
                            
                    } else {
                        alert('Invalid coordinates. Latitude must be between -90 and 90, and longitude must be between -180 and 180.');
                    }
                    })
                }
            });

            
        });

        
        addLocationINFO.addEventListener("click", () => {
            const nameLocation = document.getElementById("nameLocation");
            const longitude_input = document.getElementById("longitude");
            const Latitude_input = document.getElementById("latitude");

        auth.onAuthStateChanged((user) => {
            if(user){
                const userId = user.uid;
                const userRef = doc(db, collectionName, userId);
                
                    addDoc(collection(userRef, "sites"), {
                        Name: nameLocation.value,
                        Latitude: Latitude_input.value,
                        Longitude: longitude_input.value
                    })
                        .then((docRef) => {
                            const siteId  = docRef.id;
                            console.log("site added succesfuly ",siteId);
                            mydatalocationselect.innerHTML = "<option disabled selected>Select</option>";      
                                    nameLocation.value = "";
                                    Latitude_input.value = "";
                                    longitude_input.value = "";
                                    selectedSite1["siteId"] = null;
                                    populateSiteSelector();
                        });
                
            }
        })
    })

    
    editLocationINFO.addEventListener("click", () => {
        auth.onAuthStateChanged((user) => {
            const nameLocation = document.getElementById("nameLocation");
            const longitude_input = document.getElementById("longitude");
            const Latitude_input = document.getElementById("latitude");

            if(user){
                const userId = user.uid;
                const siteRef = doc(db, collectionName, userId, "sites", selectedSite1["siteId"]);
                const dataToUpdate = {
                    Name: nameLocation.value,
                    Latitude: Latitude_input.value,
                    Longitude: longitude_input.value,
                    };
                updateDoc(siteRef,dataToUpdate)
                .then(() => {
                    console.log("Document successfully updated.");
                    mydatalocationselect.innerHTML = "<option disabled selected>Select</option>";
                            nameLocation.value = "";
                            Latitude_input.value = "";
                            longitude_input.value = "";
                            selectedSite1["siteId"] = null;
                            populateSiteSelector();
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                });

            }
        });

    });
    const nameLocation = document.getElementById("nameLocation");
    const Latitude_input = document.getElementById("latitude");


    deletLocationINFO.addEventListener("click", () => {
        if (selectedSite1["siteId"]){
            auth.onAuthStateChanged(async (user) => {
                if(user){

                    const userId = user.uid;
                    const siteData = doc(db, collectionName, userId, "sites", selectedSite1["siteId"]);
                    deleteDoc(siteData)

                    .then(() => {

                        alert("Document successfully deleted.");
                        mydatalocationselect.innerHTML = "<option disabled selected>Select</option>";
                        nameLocation.value = "";
                        Latitude_input.value = "";
                        longitude_input.value = "";
                        selectedSite1["siteId"] = null;

                        populateSiteSelector();


        
         
                    })
                    .catch((error) => {
                        console.error("Error deleting document: ", error);
                    });
                }
            })
        }
    });

    populateSiteSelector();

///////////////////./////////////////////////////./////////////////









   const checkBoxdb = document.getElementById("checkBoxdb");
   const select_location_database = document.getElementById("select_location_database");
   const inputNamecontainer = document.getElementById("inputNamecontainer");
   const addLocationDatabase_ = document.getElementById("addLocationDatabase_");
   const editLocationDatabase_ = document.getElementById("editLocationDatabase_");
   const deletLocationDatabase_ = document.getElementById("deletLocationDatabase_");
   
   

   checkBoxdb.addEventListener('change', function() {
    // Check if checkbox is checked
    if (checkBoxdb.checked) {
      select_location_database.style.display = 'block';
      inputNamecontainer.style.display = 'none';
      addLocationDatabase_.style.display ="none"
      editLocationDatabase_.style.display = 'block';
      deletLocationDatabase_.style.display = 'block';


    } else {
        select_location_database.style.display = 'none';
        inputNamecontainer.style.display = 'block';
        addLocationDatabase_.style.display ="block"
        editLocationDatabase_.style.display = 'none';
        deletLocationDatabase_.style.display = 'none';

    }
  });
  const locationdata = document.getElementById("locationdata");
  const locationdataCancel = document.getElementById("locationdataCancel");
  const locationsNavbar = document.getElementById("locationsNavbar");

  locationdataCancel.addEventListener('click', function() {
    locationdata.style.display = "none";
});

locationsNavbar.addEventListener('click', function() {
    locationdata.style.display = "flex";
    //close :
    addDatManuSite.style.display = "none";
    addDatAutoSite.style.display = "none";
    paymentmeth.style.display = "none";
    addDataSelect.style.display = "none";
    CreatprojectSelect.style.display = "none";
});


const select_locationName_ = document.getElementById("select_locationName_");

const nameLocationInput = document.getElementById("nameLocationInput");
const input1 = document.getElementById("jan_input");
const input2 = document.getElementById("fev_input");
const input3 = document.getElementById("mar_input");
const input4 = document.getElementById("av_input");
const input5 = document.getElementById("mai_input");
const input6 = document.getElementById("ju_input");
const input7 = document.getElementById("jui_input");
const input8 = document.getElementById("out_input");
const input9 = document.getElementById("sep_input");
const input10 = document.getElementById("oct_input");
const input11 = document.getElementById("nouv_input");
const input12 = document.getElementById("dec_input");






// Function to populate the selector with sites from Firestore
function populateSiteSelector__() {
    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const userRef = doc(db, collectionName, userId);
            const siteDataRef = collection(userRef, "sites");
            const querySnapshot = await getDocs(siteDataRef);

            querySnapshot.forEach((doc) => {
                const siteName = doc.data().Name; // Assuming you have a field called "name" in your city documents
                const siteId = doc.id;
                const option = document.createElement("option");
                option.value = siteId;
                option.text = siteName;
                select_locationName_.appendChild(option);
                
            });
            
        }
    });
}

function reload(){
    nameLocationInput.value = "";
                    input1.value = "";
                    input2.value = "";
                    input3.value = "";
                    input4.value = "";
                    input5.value = "";
                    input6.value = "";
                    input7.value = "";
                    input8.value = "";
                    input9.value = "";
                    input10.value ="";
                    input11.value = "";
                    input12.value = "";
                    
} 
function populatebdSelector__() {
    reload();
    select_location_database.innerHTML = "<option disabled selected>select database</option>";  
    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const userRef = doc(db, collectionName, userId);
            const bdDataRef = collection(userRef, "sites",selectedSite_["siteId"],bdCollectionName);
            const querySnapshot = await getDocs(bdDataRef);

            querySnapshot.forEach((doc) => {
                const bdName = doc.data().Name; 
                const bdId = doc.id;
                const option = document.createElement("option");
                option.value = bdId;
                option.text = bdName;
                select_location_database.appendChild(option);
            });
            
        }
    });            

}


select_locationName_.addEventListener("change", (event) => {
    const selectedsite = select_locationName_.options[select_locationName_.selectedIndex];
    selectedSite_ = {
        siteName : selectedsite.text,
        siteId : selectedsite.value
    };
    console.log('helle');

    populatebdSelector__();

    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const siteData = doc(db, collectionName, userId, "sites", selectedsite.value);

            getDoc(siteData).then((docSnapshot) => {
            const data = docSnapshot.data();
            })
        }
    });
});

 // Event listener for when the user selects a city
 select_location_database.addEventListener("change", (event) => {
    const selectedbd = select_location_database.options[select_location_database.selectedIndex];
    selectedbd_ = {
        bdName : selectedbd.text,
        bdId : selectedbd.value
    };
    console.log("Selected base de donnees Name: " + selectedbd.text);
    console.log("Selected base de donnees ID: " + selectedbd.value);
    
    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const bdData = doc(db, collectionName, userId, "sites", selectedSite_["siteId"], bdCollectionName, selectedbd.value);
            getDoc(bdData).then((docSnapshot) => {
            const data = docSnapshot.data();
            console.log("Data from nested document:", data);
            nameLocationInput.value = selectedbd_["bdName"];
            input1.value = data["month1"];
            input2.value = data["month2"];
            input3.value = data["month3"];
            input4.value = data["month4"];
            input5.value = data["month5"];
            input6.value = data["month6"];
            input7.value = data["month7"];
            input8.value = data["month8"];
            input9.value = data["month9"];
            input10.value = data["month10"];
            input11.value = data["month11"];
            input12.value = data["month12"];
            })
        }
    });
});



addLocationDatabase_.addEventListener("click", () => {

auth.onAuthStateChanged((user) => {
    if(user){
        const userId = user.uid;
        const bdRef = doc(db, collectionName, userId, "sites", selectedSite_["siteId"]);
        
            addDoc(collection(bdRef, bdCollectionName), {
                Name: nameLocationInput.value,
                month1: input1.value,
                month2: input2.value,
                month3: input3.value,
                month4: input4.value,
                month5: input5.value,
                month6: input6.value,
                month7: input7.value,
                month8: input8.value,
                month9: input9.value,
                month10: input10.value,
                month11: input11.value,
                month12: input12.value,
            })
                .then((docRef) => {
                    const bdId  = docRef.id;
                    console.log("bd added succesfuly ",bdId);    
                    selectedbd_ = null;
                    populatebdSelector__();
                });
        
    }
})
})

editLocationDatabase_.addEventListener("click", () => {
auth.onAuthStateChanged((user) => {
    if(user){
        const userId = user.uid;
        const bdRef = doc(db, collectionName, userId, "sites", selectedSite_["siteId"], bdCollectionName, selectedbd_["bdId"]);
        const dataToUpdate = {
                Name: nameLocationInput.value,
                month1: input1.value,
                month2: input2.value,
                month3: input3.value,
                month4: input4.value,
                month5: input5.value,
                month6: input6.value,
                month7: input7.value,
                month8: input8.value,
                month9: input9.value,
                month10: input10.value,
                month11: input11.value,
                month12: input12.value,
            };
        updateDoc(bdRef,dataToUpdate)
        .then(() => {
            console.log("Document successfully updated.");
           
                    selectedbd_ = null;
                    populatebdSelector__();
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });

    }
});

});

deletLocationDatabase_.addEventListener("click", () => {
    if (selectedSite_["siteId"]){
        auth.onAuthStateChanged(async (user) => {
            if(user){
                const userId = user.uid;
                const bdData = doc(db, collectionName, userId, "sites", selectedSite_["siteId"], bdCollectionName, selectedbd_["bdId"]);
                deleteDoc(bdData)
                .then(() => {
                    console.log("Document successfully deleted.");

                    selectedbd_ = null;
                    populatebdSelector__();
                })
                .catch((error) => {
                    console.error("Error deleting document: ", error);
                });
            }
        })
    }
});


// Populate the city selector when the page loads
populateSiteSelector__();





const resherch = document.getElementById("resherch");
resherch.addEventListener("click", () => {
    
        var input = document.getElementById('search-input').value;
        
        // Effectuez une requête à l'API de géocodage Nominatim
        fetch(`https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            var latitude = parseFloat(data[0].lat);
            var longitude = parseFloat(data[0].lon);
  
            if (marker) {
              // Si un marqueur existe, supprimez-le
              map.removeLayer(marker);
            }
  
            marker = L.marker([latitude, longitude]).addTo(map)
            .bindPopup("<b>location of search :</b><br>"+input)
            .openPopup();
  
            map.setView([latitude, longitude], 13);
          } else {
            alert('Aucun résultat trouvé pour la recherche.');
          }
        })
        .catch(error => {
          console.error('Erreur lors de la recherche :', error);
          alert('Une erreur s\'est produite lors de la recherche.');
        });
      
});

const iconshersh = document.getElementById("iconshersh");
const searchContainer = document.getElementById("search-container");

iconshersh.addEventListener("click", () => {
    if (searchContainer.style.display === "none") {
        searchContainer.style.display = "flex";
    } else {
        searchContainer.style.display = "none";
    }
});





const Accountbarbtn = document.getElementById('Accountbarbtn');
const accountBar = document.getElementById('accountBar');

Accountbarbtn.addEventListener('click', function() {
    if (accountBar.style.display === "none") {
        accountBar.style.display = "flex";
    } else {
        accountBar.style.display = "none";
    }
});


// Get a reference to the logout button
const logoutButton = document.getElementById("logoutbtn");

// Add an event listener to the logout button
logoutButton.addEventListener("click", () => {
    // Sign out the user
    auth.signOut().then(() => {
        // Sign-out successful, redirect to the login page
        window.location.replace("index.html");
    }).catch((error) => {
        console.error("Error signing out:", error);
        // Handle sign-out error if needed
    });
});




  













// -------------------------------------------------</logout --------------------------------------------

