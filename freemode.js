const left_btnbaroption = document.getElementById("left_btnbaroption");
const right_btnbaroption = document.getElementById("right_btnbaroption");
const bar_option_container = document.getElementById("bar_option_container");
const input_container = document.getElementById("input_container");

function optionOnSmallScreen(mediaQuery) {
    if (mediaQuery.matches) {
        left_btnbaroption.addEventListener('click', function() {
            input_container.style.left = "10%";
            bar_option_container.style.left = "-70%";
            left_btnbaroption.style.display = "none";
            right_btnbaroption.style.display = "flex";
        });
        right_btnbaroption.addEventListener('click', function() {
            input_container.style.left = "80%";
            bar_option_container.style.left = "0%";
            left_btnbaroption.style.display = "flex";
            right_btnbaroption.style.display = "none";
        });
    } else {
        
        left_btnbaroption.addEventListener('click', function() {
            input_container.style.width="98%"
            bar_option_container.style.left = "-13%";
            left_btnbaroption.style.display = "none";
            right_btnbaroption.style.display = "flex";
        });
        right_btnbaroption.addEventListener('click', function() {
            input_container.style.width="85%"
            bar_option_container.style.left = "0%";
            left_btnbaroption.style.display = "flex";
            right_btnbaroption.style.display = "none";
        });
    }
}

const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addListener(optionOnSmallScreen); // Listen for changes in the media query
optionOnSmallScreen(mediaQuery); // Call the function initially with the media query




// ----------------bar buttom for sweech between result and inputs 

const up_btn_container = document.getElementById("up_btn_container");
const down_btn_container = document.getElementById("down_btn_container");
const helloFreeMode = document.getElementById("helloFreeMode");

up_btn_container.addEventListener('click', function() {
    helloFreeMode.style.top = "-94%";
    down_btn_container.style.display ="flex";
    up_btn_container.style.display ="none";
});
down_btn_container.addEventListener('click', function() {
    helloFreeMode.style.top = "0%";
    down_btn_container.style.display ="none";
    up_btn_container.style.display ="flex";
});




// ------------ result btn and section no result yet--------------
const result_btn = document.getElementById('result_btn');
const noresult = document.getElementById('noresult');
const Yesresult = document.getElementById('Yesresult');

result_btn.addEventListener('click', function() {
    noresult.style.display ="none";
    Yesresult.style.display ="flex";
});










// ----------------when imputs is not impty , buton for result display flex 

//location 1
const nameLocation1 = document.getElementById('nameLocation1');
//database 1
const NameDatabase1location1 = document.getElementById('NameDatabase1location1');  
const lo1Dat1jan = document.getElementById('lo1Dat1jan');
const lo1Dat1feb = document.getElementById('lo1Dat1feb');
const lo1Dat1mar = document.getElementById('lo1Dat1mar');    
const lo1Dat1apr = document.getElementById('lo1Dat1apr');   
const lo1Dat1may = document.getElementById('lo1Dat1may');     
const lo1Dat1jun = document.getElementById('lo1Dat1jun');    
const lo1Dat1jul = document.getElementById('lo1Dat1jul');
const lo1Dat1aug = document.getElementById('lo1Dat1aug');
const lo1Dat1sep  = document.getElementById('lo1Dat1sep');
const lo1Dat1oct  = document.getElementById('lo1Dat1oct');
const lo1Dat1nov = document.getElementById('lo1Dat1nov');
const lo1Dat1dec  = document.getElementById('lo1Dat1dec');
//database 2
const NameDatabase2location1 = document.getElementById('NameDatabase2location1');  
const lo1Dat2jan = document.getElementById('lo1Dat2jan');
const lo1Dat2feb = document.getElementById('lo1Dat2feb');
const lo1Dat2mar = document.getElementById('lo1Dat2mar');    
const lo1Dat2apr = document.getElementById('lo1Dat2apr');   
const lo1Dat2may = document.getElementById('lo1Dat2may');       
const lo1Dat2jun = document.getElementById('lo1Dat2jun');    
const lo1Dat2jul = document.getElementById('lo1Dat2jul');
const lo1Dat2aug = document.getElementById('lo1Dat2aug');
const lo1Dat2sep  = document.getElementById('lo1Dat2sep');
const lo1Dat2oct  = document.getElementById('lo1Dat2oct');
const lo1Dat2nov = document.getElementById('lo1Dat2nov');
const lo1Dat2dec  = document.getElementById('lo1Dat2dec');

// ------------------------------------

//location 2
const nameLocation2 = document.getElementById('nameLocation2');
//database 1
const NameDatabase1location2 = document.getElementById('NameDatabase1location2');  
const lo2Dat1jan = document.getElementById('lo2Dat1jan');
const lo2Dat1feb = document.getElementById('lo2Dat1feb');
const lo2Dat1mar = document.getElementById('lo2Dat1mar');    
const lo2Dat1apr = document.getElementById('lo2Dat1apr');   
const lo2Dat1may = document.getElementById('lo2Dat1may');     
const lo2Dat1jun = document.getElementById('lo2Dat1jun');    
const lo2Dat1jul = document.getElementById('lo2Dat1jul');
const lo2Dat1aug = document.getElementById('lo2Dat1aug');
const lo2Dat1sep  = document.getElementById('lo2Dat1sep');
const lo2Dat1oct  = document.getElementById('lo2Dat1oct');
const lo2Dat1nov = document.getElementById('lo2Dat1nov');
const lo2Dat1dec  = document.getElementById('lo2Dat1dec');
//database 2
const NameDatabase2location2 = document.getElementById('NameDatabase2location2');  
const lo2Dat2jan = document.getElementById('lo2Dat2jan');
const lo2Dat2feb = document.getElementById('lo2Dat2feb');
const lo2Dat2mar = document.getElementById('lo2Dat2mar');    
const lo2Dat2apr = document.getElementById('lo2Dat2apr');   
const lo2Dat2may = document.getElementById('lo2Dat2may');       
const lo2Dat2jun = document.getElementById('lo2Dat2jun');    
const lo2Dat2jul = document.getElementById('lo2Dat2jul');
const lo2Dat2aug = document.getElementById('lo2Dat2aug');
const lo2Dat2sep  = document.getElementById('lo2Dat2sep');
const lo2Dat2oct  = document.getElementById('lo2Dat2oct');
const lo2Dat2nov = document.getElementById('lo2Dat2nov');
const lo2Dat2dec  = document.getElementById('lo2Dat2dec');



const remarque  = document.getElementById('remarque');

//all data

const dataLocation = [
    {
      HassiRmel: [
        ["PVGIS", 1, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ["SODA", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
        ["NASASSE", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 999999]
      ]
    },
    {
      naama: [
        ["PVGIS", 1, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ["SODA", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
        ["NASASSE", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 999999]
      ]
    },
    {
      kenadssa: [
        ["PVGIS", 1, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ["SODA", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
        ["NASASSE", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 91111]
      ]
    }
  ];

//location1 inport data

const locationSelect = document.getElementById('location1');
const L1database1Select = document.getElementById('L1database1');
const L1database2Select = document.getElementById('L1database2');

const locationSelect2 = document.getElementById('location2');
const L2database1Select = document.getElementById('L2database1');
const L2database2Select = document.getElementById('L2database2');


const selectSoyrceDATA = document.getElementById('selectSoyrceDATA');
const SSP_data_select = document.getElementById('SSP_data_select');
const result_for_btn = document.getElementById('result_for_btn');

function updateInputsForDataSources() {
    const selectSourceDataVal = parseInt(selectSoyrceDATA.value); // Parse the value to an integer

    if (selectSourceDataVal === 1) {
        SSP_data_select.style.display = "none";
        result_for_btn.style.display = "block ";
    }
    if (selectSourceDataVal === 2) {
        SSP_data_select.style.display = "block";
        result_for_btn.style.display = "block";
    }
}

selectSoyrceDATA.addEventListener('change', function() {

    updateInputsForDataSources();

});



function updateInputs() {
    const location = locationSelect.value;
    const database1 = L1database1Select.value;
    const database2 = L1database2Select.value;

    const location2 = locationSelect2.value;
    const L2database1 = L2database1Select.value;
    const L2database2 = L2database2Select.value;

    const locationData = dataLocation.find(data => data[location]);

//location 1 inport data to inputs 
    if (locationData) {
        const data = locationData;
        if (data) {
            nameLocation1.value = location;
        }
        checkInput()
      }
    if (locationData) {
      const data = locationData[location].find(item => item[0] === database1);
      if (data) {
        NameDatabase1location1.value = data[0];
        lo1Dat1jan.value = data[1];
        lo1Dat1feb.value = data[2];
        lo1Dat1mar.value = data[3];
        lo1Dat1apr.value = data[4];
        lo1Dat1may.value = data[5];
        lo1Dat1jun.value = data[6];
        lo1Dat1jul.value = data[7];
        lo1Dat1aug.value = data[8];
        lo1Dat1sep.value = data[9];
        lo1Dat1oct.value = data[10];
        lo1Dat1nov.value = data[11];
        lo1Dat1dec.value = data[12];

      }
      checkInput()
    }
    if (locationData) {
      const data = locationData[location].find(item => item[0] === database2);
      if (data) {
        NameDatabase2location1.value = data[0];
        lo1Dat2jan.value = data[1];
        lo1Dat2feb.value = data[2];
        lo1Dat2mar.value = data[3];
        lo1Dat2apr.value = data[4];
        lo1Dat2may.value = data[5];
        lo1Dat2jun.value = data[6];
        lo1Dat2jul.value = data[7];
        lo1Dat2aug.value = data[8];
        lo1Dat2sep.value = data[9];
        lo1Dat2oct.value = data[10];
        lo1Dat2nov.value = data[11];
        lo1Dat2dec.value = data[12];

      }
      checkInput()
    }
    const locationData2 = dataLocation.find(data => data[location2]);
    //location 2 inport data to inputs 
    if (locationData2) {
        const data = locationData2;
        if (data) {
            nameLocation2.value = location2;
        }
        checkInput()
      }
    if (locationData2) {
      const data = locationData2[location2].find(item => item[0] === L2database1);
      if (data) {
        NameDatabase1location2.value = data[0];
        lo2Dat1jan.value = data[1];
        lo2Dat1feb.value = data[2];
        lo2Dat1mar.value = data[3];
        lo2Dat1apr.value = data[4];
        lo2Dat1may.value = data[5];
        lo2Dat1jun.value = data[6];
        lo2Dat1jul.value = data[7];
        lo2Dat1aug.value = data[8];
        lo2Dat1sep.value = data[9];
        lo2Dat1oct.value = data[10];
        lo2Dat1nov.value = data[11];
        lo2Dat1dec.value = data[12];
      }
      checkInput()
    }
    if (locationData2) {
      const data = locationData2[location2].find(item => item[0] === L2database2);
      if (data) {
        NameDatabase2location2.value = data[0];
        lo2Dat2jan.value = data[1];
        lo2Dat2feb.value = data[2];
        lo2Dat2mar.value = data[3];
        lo2Dat2apr.value = data[4];
        lo2Dat2may.value = data[5];
        lo2Dat2jun.value = data[6];
        lo2Dat2jul.value = data[7];
        lo2Dat2aug.value = data[8];
        lo2Dat2sep.value = data[9];
        lo2Dat2oct.value = data[10];
        lo2Dat2nov.value = data[11];
        lo2Dat2dec.value = data[12];
      }
      checkInput()
    }
  }

  locationSelect.addEventListener('change', function() {
    updateInputs();
    // Reset the second data type select to the default option
    L1database1Select.selectedIndex = 0;
    L1database2Select.selectedIndex = 0;


  });
  locationSelect2.addEventListener('change', function() {
    updateInputs();
    // Reset the second data type select to the default option
    L2database1Select.selectedIndex = 0;
    L2database2Select.selectedIndex = 0;


  });
  L1database1Select.addEventListener('change', updateInputs);
  L1database2Select.addEventListener('change', updateInputs);

  L2database1Select.addEventListener('change', updateInputs);
  L2database2Select.addEventListener('change', updateInputs);

  // Initial call to populate inputs with default values
  updateInputs();








// Function to check if inputs are empty


result_btn.addEventListener('click', function() {
    helloFreeMode.style.top = "-94%";
    down_btn_container.style.display ="flex";
    up_btn_container.style.display ="none";
    generateResult();
});




const left_icon_menu_resul = document.getElementById("left_icon_menu_resul");
const right_icon_menu_resul = document.getElementById("right_icon_menu_resul");
const menu_forResultCntainer = document.getElementById("menu_forResultCntainer");
const result_Container = document.getElementById("result_Container");

function optionOnSmallScreen2(mediaQuery) {
    if (mediaQuery.matches) {
      left_icon_menu_resul.addEventListener('click', function() {
            result_Container.style.left = "-60%";
            menu_forResultCntainer.style.left = "15%";
            right_icon_menu_resul.style.display = "flex";
            left_icon_menu_resul.style.display = "none";
        });
        right_icon_menu_resul.addEventListener('click', function() {
            result_Container.style.left = "0%";
            menu_forResultCntainer.style.left = "90%";
            right_icon_menu_resul.style.display = "none";
            left_icon_menu_resul.style.display = "flex";
        });
    } else {
        
      left_icon_menu_resul.addEventListener('click', function() {
            result_Container.style.width="85%"
            menu_forResultCntainer.style.left = "85%";
            right_icon_menu_resul.style.display = "flex";
            left_icon_menu_resul.style.display = "none";
        });
        right_icon_menu_resul.addEventListener('click', function() {
            result_Container.style.width="98%"
            menu_forResultCntainer.style.left = "98%";
            right_icon_menu_resul.style.display = "none";
            left_icon_menu_resul.style.display = "flex";
        });
    }
}

mediaQuery.addListener(optionOnSmallScreen2); // Listen for changes in the media query
optionOnSmallScreen2(mediaQuery); // Call the function initially with the media query


// ____________________________COLLECT_DATA______________________________________


const locations = [];
const monthAbr = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const siteNumber = 2;
const bdNumber = 2;
var monthNames = {month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December"};
var sites = [siteNumber];
var siteBd = [siteNumber];
var monthData = [siteNumber];
var mensualSum = [];
var moyen = [];
var somSaison = [];
var somMoyAnnual = [];
var somMoyAnnualList = [];
var optemiste = [siteNumber];
var pessemiste = [siteNumber];
for (var i = 0; i < siteNumber; i++) {
    siteBd[i] = [];
    mensualSum[i] = [];
    moyen[i] = [];
    monthData[i] = [bdNumber];
    somSaison[i] = [];
    optemiste[i] = [12];
    pessemiste[i] = [12];
    for (var j = 0; j < bdNumber; j++) {
    monthData[i][j] = [12];
    somSaison[i][j] = [];
    }
}

const monthName = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
            
var colors = ['blue', 'red', 'yellow', 'green', 'orange', 'purple'];
var saisons = ['Hiver', 'Printemps', 'été', 'Automne'];


function collectData(locationId) {
    const location = {
        name: document.getElementById(`nameLocation${locationId}`).value,
        databases: []
    };

    sites[locationId-1] = {
        siteName : document.getElementById(`nameLocation${locationId}`).value,
    };

    for (let i = 1; i <= 2; i++) {
        const database = {
            name: document.getElementById(`NameDatabase${i}location${locationId}`).value,
            data: []
        };
        siteBd[locationId-1][i-1] = {
                bdName : document.getElementById(`NameDatabase${i}location${locationId}`).value
            };

            
        for (let j = 0; j < 12; j++) {

            var inputValue = parseFloat(document.getElementById(`lo${locationId}Dat${i}${monthAbr[j]}`).value);
            // Check if the input value is empty or not a number
            if (isNaN(inputValue) || inputValue === 0) {
                inputValue = 1; // Assigning 1 as default value
            }

            const value = inputValue;
            database.data.push(value);
            monthData[locationId-1][i-1][j] = value;
        }

        location.databases.push(database);
    }

    locations.push(location);
}







// ____________________________COLLECT_DATA______________________________________
//
//
//
//
//
//
//function generateResult(){
//
//  const nameLocation1 = document.getElementById('nameLocation1').value;
//const NameDatabase1location1 = document.getElementById('NameDatabase1location1').value;
//const lo1Dat1jan = parseFloat(document.getElementById('lo1Dat1jan').value);
//const lo1Dat1feb = parseFloat(document.getElementById('lo1Dat1feb').value);
//const lo1Dat1mar = parseFloat(document.getElementById('lo1Dat1mar').value);
//const lo1Dat1apr = parseFloat(document.getElementById('lo1Dat1apr').value);
//const lo1Dat1may = parseFloat(document.getElementById('lo1Dat1may').value);
//const lo1Dat1jun = parseFloat(document.getElementById('lo1Dat1jun').value);
//const lo1Dat1jul = parseFloat(document.getElementById('lo1Dat1jul').value);
//const lo1Dat1aug = parseFloat(document.getElementById('lo1Dat1aug').value);
//const lo1Dat1sep = parseFloat(document.getElementById('lo1Dat1sep').value);
//const lo1Dat1oct = parseFloat(document.getElementById('lo1Dat1oct').value);
//const lo1Dat1nov = parseFloat(document.getElementById('lo1Dat1nov').value);
//const lo1Dat1dec = parseFloat(document.getElementById('lo1Dat1dec').value);
//
//const datalocation11 = {
//    0: NameDatabase1location1,
//    1: lo1Dat1jan,
//    2: lo1Dat1feb,
//    3: lo1Dat1mar,
//    4: lo1Dat1apr,
//    5: lo1Dat1may,
//    6: lo1Dat1jun,
//    7: lo1Dat1jul,
//    8: lo1Dat1aug,
//    9: lo1Dat1sep,
//    10: lo1Dat1oct,
//    11: lo1Dat1nov,
//    12: lo1Dat1dec
//};
//
//
//const NameDatabase2location1 = document.getElementById('NameDatabase2location1').value;
//const lo1Dat2jan = parseFloat(document.getElementById('lo1Dat2jan').value);
//const lo1Dat2feb = parseFloat(document.getElementById('lo1Dat2feb').value);
//const lo1Dat2mar = parseFloat(document.getElementById('lo1Dat2mar').value);
//const lo1Dat2apr = parseFloat(document.getElementById('lo1Dat2apr').value);
//const lo1Dat2may = parseFloat(document.getElementById('lo1Dat2may').value);
//const lo1Dat2jun = parseFloat(document.getElementById('lo1Dat2jun').value);
//const lo1Dat2jul = parseFloat(document.getElementById('lo1Dat2jul').value);
//const lo1Dat2aug = parseFloat(document.getElementById('lo1Dat2aug').value);
//const lo1Dat2sep = parseFloat(document.getElementById('lo1Dat2sep').value);
//const lo1Dat2oct = parseFloat(document.getElementById('lo1Dat2oct').value);
//const lo1Dat2nov = parseFloat(document.getElementById('lo1Dat2nov').value);
//const lo1Dat2dec = parseFloat(document.getElementById('lo1Dat2dec').value);
//
//const datalocation12 = {
//    0: NameDatabase2location1,
//    1: lo1Dat2jan,
//    2: lo1Dat2feb,
//    3: lo1Dat2mar,
//    4: lo1Dat2apr,
//    5: lo1Dat2may,
//    6: lo1Dat2jun,
//    7: lo1Dat2jul,
//    8: lo1Dat2aug,
//    9: lo1Dat2sep,
//    10: lo1Dat2oct,
//    11: lo1Dat2nov,
//    12: lo1Dat2dec
//};
//
//const nameLocation2 = document.getElementById('nameLocation2').value;
//const NameDatabase1location2 = document.getElementById('NameDatabase1location2').value;
//const lo2Dat1jan = parseFloat(document.getElementById('lo1Dat1jan').value);
//const lo2Dat1feb = parseFloat(document.getElementById('lo2Dat1feb').value);
//const lo2Dat1mar = parseFloat(document.getElementById('lo2Dat1mar').value);
//const lo2Dat1apr = parseFloat(document.getElementById('lo2Dat1apr').value);
//const lo2Dat1may = parseFloat(document.getElementById('lo2Dat1may').value);
//const lo2Dat1jun = parseFloat(document.getElementById('lo2Dat1jun').value);
//const lo2Dat1jul = parseFloat(document.getElementById('lo2Dat1jul').value);
//const lo2Dat1aug = parseFloat(document.getElementById('lo2Dat1aug').value);
//const lo2Dat1sep = parseFloat(document.getElementById('lo2Dat1sep').value);
//const lo2Dat1oct = parseFloat(document.getElementById('lo2Dat1oct').value);
//const lo2Dat1nov = parseFloat(document.getElementById('lo2Dat1nov').value);
//const lo2Dat1dec = parseFloat(document.getElementById('lo2Dat1dec').value);
//
//const datalocation21 = {
//    0: NameDatabase1location2,
//    1: lo2Dat1jan,
//    2: lo2Dat1feb,
//    3: lo2Dat1mar,
//    4: lo2Dat1apr,
//    5: lo2Dat1may,
//    6: lo2Dat1jun,
//    7: lo2Dat1jul,
//    8: lo2Dat1aug,
//    9: lo2Dat1sep,
//    10: lo2Dat1oct,
//    11: lo2Dat1nov,
//    12: lo2Dat1dec
//};
//
//
//const NameDatabase2location2 = document.getElementById('NameDatabase2location2').value;
//const lo2Dat2jan = parseFloat(document.getElementById('lo2Dat2jan').value);
//const lo2Dat2feb = parseFloat(document.getElementById('lo2Dat2feb').value);
//const lo2Dat2mar = parseFloat(document.getElementById('lo2Dat2mar').value);
//const lo2Dat2apr = parseFloat(document.getElementById('lo2Dat2apr').value);
//const lo2Dat2may = parseFloat(document.getElementById('lo2Dat2may').value);
//const lo2Dat2jun = parseFloat(document.getElementById('lo2Dat2jun').value);
//const lo2Dat2jul = parseFloat(document.getElementById('lo2Dat2jul').value);
//const lo2Dat2aug = parseFloat(document.getElementById('lo2Dat2aug').value);
//const lo2Dat2sep = parseFloat(document.getElementById('lo2Dat2sep').value);
//const lo2Dat2oct = parseFloat(document.getElementById('lo2Dat2oct').value);
//const lo2Dat2nov = parseFloat(document.getElementById('lo2Dat2nov').value);
//const lo2Dat2dec = parseFloat(document.getElementById('lo2Dat2dec').value);
//
//const datalocation22 = {
//    0: NameDatabase2location2,
//    1: lo2Dat2jan,
//    2: lo2Dat2feb,
//    3: lo2Dat2mar,
//    4: lo2Dat2apr,
//    5: lo2Dat2may,
//    6: lo2Dat2jun,
//    7: lo2Dat2jul,
//    8: lo2Dat2aug,
//    9: lo2Dat2sep,
//    10: lo2Dat2oct,
//    11: lo2Dat2nov,
//    12: lo2Dat2dec
//};
//
////console.log(nameLocation1); // Outputs the object containing input values
////console.log(datalocation11); // Outputs the object containing input values
////console.log(datalocation12); // Outputs the object containing input values
////console.log(nameLocation2); // Outputs the object containing input values
////console.log(datalocation21); // Outputs the object containing input values
////console.log(datalocation22); // Outputs the object containing input values
//
//            
//            const resultContainer = document.getElementById("result_Cont");
//            resultContainer.innerHTML = ''; // Clear existing content
//
//            
//
//            const locations = [
//                [nameLocation1, [datalocation11, datalocation12]],
//                [nameLocation2, [datalocation21, datalocation22]]
//            ];
//            const months = ["Location", "Database", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
//
//               // analys data
//            for (let i = 0; i < locations.length; i++) {
//
//        
//                const container1 = document.createElement('div');
//                container1.classList = 'titleResultContainer';
//                const titleLocationData = document.createElement('h2');
//                titleLocationData.innerHTML = locations[i][0];
//                console.log(locations[i][0]); ///////////////////////////////////////
//                container1.appendChild(titleLocationData);
//                resultContainer.appendChild(container1);
//
//                const container2 = document.createElement('div');
//                container2.classList = 'tableResultContainer';
//                const table = document.createElement('table');
//                table.classList = 'resultTableLocation';
//                const tr = document.createElement('tr');
//                months.forEach(month => {
//                    const td = document.createElement('td');
//                    td.textContent = month;
//                    tr.appendChild(td);
//                });
//                table.appendChild(tr);
//                
//                for (let b = 0; b < 2; b++) {
//                  var MaxValD1L1, MaxValD2L1, MaxValD1L2, MaxValD2L2; // Declare variables outside the conditional blocks
//                  var MinValD1L1, MinValD2L1, MinValD1L2, MinValD2L2; // Declare variables outside the conditional blocks
//
//                  var MonMaxD1L1, MonMaxD2L1, MonMaxD1L2, MonMaxD2L2; // Declare variables outside the conditional blocks
//                  var MonMinD1L1, MonMinD2L1, MonMinD1L2, MonMinD2L2; // Declare variables outside the conditional blocks
//
//                    if (b === 0) {     
//                    const newRow = table.insertRow();
//                    const locationCell = newRow.insertCell();
//                    locationCell.textContent = locations[i][0];
//                    locationCell.rowSpan = 2; // Span across two rows             
//                  
//                    let maxIndex = 2; 
//                    let maxValue = locations[i][1][b][2]; // Initialize max value with the first data value                    
//                    let minIndex = 2; 
//                    let minValue = locations[i][1][b][2]; // Initialize max value with the first data value                    
//                    
//
//
//                    for (let d = 0; d < 13; d++) {
//                        const dataCell = newRow.insertCell();
//                        const data_db = locations[i][1][b][d];
//                        dataCell.textContent = data_db;
//                        console.log(dataCell);
//                        if(d > 1){
//                          const value = data_db;
//
//                          if ( value > maxValue) {
//                              maxValue = value;
//                              maxIndex = d;
//                              var month_DataMax = months[d];
//
//                          }
//                          if ( value < minValue) {
//                            minValue = value;
//                            minIndex = d;
//                            var month_DataMin = months[d];
//                          }
//                        }
//                      } 
//                      newRow.cells[maxIndex+1].classList.add("max-value");
//                      newRow.cells[minIndex].classList.add("min-value");
//
//
//                      console.log("------------------------------------------------------------");
//                      if(i=== 0){
//                         MaxValD1L1 = maxValue;
//                         MinValD1L1 = minValue;
//                         MonMaxD1L1 = month_DataMax;
//                         MonMinD1L1 = month_DataMin;
//
//                      }
//                      if(i=== 1){
//                         MaxValD1L2 = maxValue;
//                         MinValD1L2 = minValue;
//                         MonMaxD1L2 = month_DataMax;
//                         MonMinD1L2 = month_DataMin;
//
//                      }
//                     }
//                
//                    if(b===1){
//                                        
//                    let maxIndex = 1; 
//                    let maxValue = locations[i][1][b][1]; // Initialize max value with the first data value                    
//                    let minIndex = 1; 
//                    let minValue = locations[i][1][b][1]; // Initialize max value with the first data value                    
//                    
//
//                    
//                      const newRow_bd = table.insertRow(); // Create a new row here
//                      for (let d = 0; d < 13; d++) {
//                        const dataCell = newRow_bd.insertCell();
//                        const data_db = locations[i][1][b][d];
//                        dataCell.textContent = data_db;
//                        console.log(dataCell);
//
//                           if(d > 1){
//
//                             const value = data_db;
//                             if ( value > maxValue) {
//                                 maxValue = value;
//                                 maxIndex = d;
//                                 var month_DataMax = months[d+1];
//
//                             }
//                             if ( value < minValue) {
//                              minValue = value;
//                              minIndex = d;
//                               var month_DataMin = months[d+1];
//                          }
//                           }
//                        } 
//
//                      newRow_bd.cells[maxIndex].classList.add("max-value");
//                      newRow_bd.cells[minIndex].classList.add("min-value");
//                      
//
//
//                      console.log("------------------------------------------------------------");
//                      if(i=== 0){
//                         MaxValD2L1 = maxValue;
//                         MinValD2L1 = minValue;
//                         MonMaxD2L1 = month_DataMax
//                         MonMinD2L1 = month_DataMin
//
//                      }
//                      if(i=== 1){
//                         MaxValD2L2 = maxValue;
//                         MinValD2L2 = minValue;
//                         MonMaxD2L2 = month_DataMax
//                         MonMinD2L2 = month_DataMin
//
//                      }
//                      
//                    }
//
//
// 
//  
//                }
//                console.log("MaxValD1L1="+MaxValD1L1);
//                console.log("Month_MaxValD1L1="+MonMaxD1L1);
//
//                console.log("MaxValD2L1="+MaxValD2L1);
//                console.log("Month_MaxValD2L1="+MonMaxD2L1);
//
//                console.log("MaxValD1L2="+MaxValD1L2);
//                console.log("Month_MaxValD1L2="+MonMaxD1L2);
//
//                console.log("MaxValD2L2="+MaxValD2L2);
//                console.log("Month_MaxValD2L2="+MonMaxD2L2);
//
//                console.log("--------------------------");
//                console.log("MinValD1L1="+MinValD1L1);
//                console.log("Month_MinValD1L1="+MonMinD1L1);
//
//                console.log("MinValD2L1="+MinValD2L1);
//                console.log("Month_MinValD2L1="+MonMinD2L1);
//
//                console.log("MinValD1L2="+MinValD1L2);
//                console.log("Month_MinValD1L2="+MonMinD1L2);
//
//                console.log("MinValD2L2="+MinValD2L2);
//                console.log("Month_MinValD2L2="+MonMinD2L2);
//
//
//           
//                container2.appendChild(table);
//                resultContainer.appendChild(container2);
//                 
//                const container3 = document.createElement('div');
//                container3.classList = 'grapheResultContainer';
//                
//                const location1Data1 = Object.values(datalocation11).slice(1); // Extracting data from January to December
//                const location1Data2 = Object.values(datalocation12).slice(1); // Extracting data from January to December
//                
//                const location2Data1 = Object.values(datalocation21).slice(1); // Extracting data from January to December
//                const location2Data2 = Object.values(datalocation22).slice(1); // Extracting data from January to December
//                
//                const chart_canvas = document.createElement("canvas");
//                chart_canvas.width = 300; // Setting width of canvas
//                const ctx = chart_canvas.getContext('2d');
//                
//                const datalocationVar = [];
//                
//                if (i === 0) {
//                    for (let M = 0; M < 2; M++) {
//                        datalocationVar[M] = {
//                            label: M === 0 ? datalocation11[0] : datalocation12[0],
//                            data: M === 0 ? location1Data1 : location1Data2,
//                            borderColor: M === 0 ? 'rgb(255, 99, 132)' : 'rgb(100, 50, 132)',
//                            tension: 0.1
//                        };
//                    }
//                } else if (i === 1) {
//                    for (let M = 0; M < 2; M++) {
//                        datalocationVar[M] = {
//                            label: M === 0 ? datalocation21[0] : datalocation22[0],
//                            data: M === 0 ? location2Data1 : location2Data2,
//                            borderColor: M === 0 ? 'rgb(255, 99, 132)' : 'rgb(100, 50, 132)',
//                            tension: 0.1
//                        };
//                    }
//                }
//                
//                const chart_dataLocation = new Chart(ctx, {
//                    type: 'line',
//                    data: {
//                        labels: months,
//                        datasets: datalocationVar
//                    },
//                    options: {
//                        scales: {
//                            y: {
//                                beginAtZero: true
//                            }
//                        }
//                    }
//                });
//                container3.appendChild(chart_canvas);
//                resultContainer.appendChild(container3);
//
//
//                const container4 = document.createElement("div");
//                container4.classList="interpretationResultContainer";
//
//                // Function to interpret graph data in detail
//                function interpretGraphDataDetailed(data) {
//                  const max = Math.max(...data); // Maximum value in the data
//                  const min = Math.min(...data); // Minimum value in the data
//                  const sum = data.reduce((acc, curr) => acc + curr, 0); // Sum of the data
//                  const average = sum / data.length; // Average of the data
//                  const range = max - min; // Range of the data
//                  const variance = data.reduce((acc, curr) => acc + Math.pow(curr - average, 2), 0) / data.length; // Variance of the data
//                  
//                  // Constructing the detailed interpretation
//                  let interpretation = `The graph presents the following data:\n\n`;
//                  interpretation += ` - The maximum value is: ${max}\n\n`;
//                  interpretation += ` - The minimum value is: ${min}\n\n`;
//                  interpretation += ` - The sum of the data is: ${sum}\n\n`;
//                  interpretation += ` - The average of the data is: ${average.toFixed(2)}\n\n`;
//                  interpretation += ` - The range of the data is: ${range}\n\n`;
//                  interpretation += ` - The variance of the data is: ${variance.toFixed(2)}\n\n`;
//                  
//                  return interpretation;
//                }
//                
//                if (i === 0) {
//                  // Example of interpreting graph data for location1Data1
//                  const interpretation1 = interpretGraphDataDetailed(location1Data1);
//                  const comment1 = document.createElement("h3");
//                  comment1.textContent = "Interpretation for"+ datalocation11[0]+":\n" + interpretation1;
//                  container4.appendChild(comment1);
//                
//                  // Example of interpreting graph data for location1Data2
//                  const interpretation2 = interpretGraphDataDetailed(location1Data2);
//                  const comment2 = document.createElement("h3");
//                  comment2.textContent = "Interpretation for "+ datalocation12[0]+":\n" + interpretation2;
//                  container4.appendChild(comment2);
//                }
//                
//                if (i === 1) {
//                  // Example of interpreting graph data for location2Data1
//                  const interpretation3 = interpretGraphDataDetailed(location2Data1);
//                  const comment3 = document.createElement("h3");
//                  comment3.textContent = "Interpretation for "+ datalocation21[0]+"\n" + interpretation3;
//                  container4.appendChild(comment3);
//                
//                  // Example of interpreting graph data for location2Data2
//                  const interpretation4 = interpretGraphDataDetailed(location2Data2);
//                  const comment4 = document.createElement("h3");
//                  comment4.textContent = "Interpretation for "+ datalocation22[0]+"\n" + interpretation4;
//                  container4.appendChild(comment4);
//                }
//                
//
//
//                 resultContainer.appendChild(container4);
//
//                                 
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//                // ____________________________i______________________________________
//
//            } 
//
//}





// ____________________________DATA______________________________________




function checkInput() {
  if (nameLocation1.value.trim() === '' || NameDatabase1location1.value.trim() === ''||
  NameDatabase2location1.value.trim() === ''||
  lo1Dat1jan.value.trim() === '' ||lo1Dat1feb.value.trim() === '' ||lo1Dat1mar.value.trim() === '' ||
  lo1Dat1apr.value.trim() === '' ||lo1Dat1may.value.trim() === '' ||lo1Dat1jun.value.trim() === '' ||
  lo1Dat1jul.value.trim() === '' ||lo1Dat1aug.value.trim() === '' ||lo1Dat1sep.value.trim() === '' ||
  lo1Dat1oct.value.trim() === '' ||lo1Dat1nov.value.trim() === '' ||lo1Dat1dec.value.trim() === ''||

  
  lo1Dat2jan.value.trim() === '' ||lo1Dat2feb.value.trim() === '' ||lo1Dat2mar.value.trim() === '' ||
  lo1Dat2apr.value.trim() === '' ||lo1Dat2may.value.trim() === '' ||lo1Dat2jun.value.trim() === '' ||
  lo1Dat2jul.value.trim() === '' ||lo1Dat2aug.value.trim() === '' ||lo1Dat2sep.value.trim() === '' ||
  lo1Dat2oct.value.trim() === '' ||lo1Dat2nov.value.trim() === '' ||lo1Dat2dec.value.trim() === ''||

  
  nameLocation2.value.trim() === '' || NameDatabase1location2.value.trim() === ''||
  NameDatabase2location2.value.trim() === ''||
  
  lo2Dat1jan.value.trim() === '' ||lo2Dat1feb.value.trim() === '' ||lo2Dat1mar.value.trim() === '' ||
  lo2Dat1apr.value.trim() === '' ||lo2Dat1may.value.trim() === '' ||lo2Dat1jun.value.trim() === '' ||
  lo2Dat1jul.value.trim() === '' ||lo2Dat1aug.value.trim() === '' ||lo2Dat1sep.value.trim() === '' ||
  lo2Dat1oct.value.trim() === '' ||lo2Dat1nov.value.trim() === '' ||lo2Dat1dec.value.trim() === '' ||

  lo2Dat2jan.value.trim() === '' ||lo2Dat2feb.value.trim() === '' ||lo2Dat2mar.value.trim() === '' ||
  lo2Dat2apr.value.trim() === '' ||lo2Dat2may.value.trim() === '' ||lo2Dat2jun.value.trim() === '' ||
  lo2Dat2jul.value.trim() === '' ||lo2Dat2aug.value.trim() === '' ||lo2Dat2sep.value.trim() === '' ||
  lo2Dat2oct.value.trim() === '' ||lo2Dat2nov.value.trim() === '' ||lo2Dat2dec.value.trim() === ''
  ) {
    result_btn.style.display = "none";
    remarque.style.display = "inline-block";
} else {
  result_btn.style.display = "inline-block";
  remarque.style.display = "none";

}

} 

document.getElementById("result_btn").addEventListener("click", function() {
    // Collect data for both locations
    collectData(1);
    collectData(2);

   // affichage(sites,2);

    //console.log(locations);
    console.log(sites);
    console.log(siteBd); 
    console.log(monthData);  // Output the collected data for testing

    sites.forEach(function(site, index){
       createTableAffichage(index+1,bdNumber);
    })

});







function createTableAffichage(s,d) {

var container = document.createElement('div');
container.id = 'site-container'+s;
 //ligne
var ligne = document.createElement('div');        
ligne.classList ='ligne';  
container.appendChild(ligne);
//'tableResultContainer';titleResultContainer
 //title table 1 pour l'affichage des donnes pour chaque site 
 var title1 = document.createElement('h1');
 title1.classList ='titleResultContainer';  
 title1.innerHTML ="Monthly DNI data for <span>"+sites[s-1]["siteName"]+"</span>";
 container.appendChild(title1);

  //sub-title table 1 pour l'affichage des donnes pour chaque site 
 var subtitle1 = document.createElement('p');
 subtitle1.classList ='titleResultContainer';  
 subtitle1.innerHTML ="This table represents the monthly data of DNI, for <span>"+sites[s-1]["siteName"]+"</span>. From various databases";
 container.appendChild(subtitle1);
 
 var table_bg = document.createElement('div');
 table_bg.classList='tableResultContainer'

var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "Site Name";
tr.appendChild(td);
td = document.createElement('td');
td.textContent = "Database Name";
tr.appendChild(td);
monthName.forEach(function (month) {
    var td = document.createElement('td');
    td.textContent = month;
    tr.appendChild(td);
});
tbody.appendChild(tr);
tr = document.createElement('tr');
td = document.createElement('td');
td.textContent = sites[s-1]["siteName"];
td.rowSpan = d;
tr.appendChild(td);
for (var i = 0; i < d; i++){
    if (i > 0) tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = siteBd[s-1][i]['bdName'];
    tr.appendChild(td);
    for(var j = 0; j < 12; j++){
        var tdcell = document.createElement('td');
        tdcell.textContent = monthData[s-1][i][j];
        tr.appendChild(tdcell);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);

table_bg.appendChild(table);
container.appendChild(table_bg);

container.appendChild(document.createElement("br"));
var secContainer = document.getElementById('display-container');
secContainer.appendChild(container);
createLineChart(container.id,s);
createTableSommeAnnuel(container.id,s,d,siteNumber);


var menu_dashbaord_sites = document.getElementById('menu_dashbaord_sites');

var div = menu_dashbaord_sites.appendChild(document.createElement('div'));
div.id = 'menu_dashbaord_sitesScroll' + s;
div.classList = 'options_box_Button';

div.addEventListener('click', (function (s) {

return function () {
    scrollToSection1(s);
    console.log("scrollToSection1 called & s="+s);
};
})(s));

var titleButton = div.appendChild(document.createElement('a'));
titleButton.innerHTML = sites[s-1]["siteName"];
div.appendChild(titleButton);
}




function scrollToSection1(s) {
const site_container = `site-container${s}`;
const div_result_site = document.getElementById(site_container);

if (div_result_site) {
div_result_site.scrollIntoView({behavior: "smooth"});
console.log("scrollToSection1 oppened"+site_container);
}
}



function createTableSommeAnnuel(containerId,s,d,n) {
// Append the table to the container
var tableContainer = document.getElementById(containerId);
 //title table 2 pour l'affichage des donnes pour chaque site 
 var title3 = document.createElement('h1');
 title3.classList ='titleResultContainer';  
 title3.innerHTML ="Annual sum of DNI for <span>"+sites[s-1]["siteName"]+"</span>";
 tableContainer.appendChild(title3);

  //sub-title table é pour l'affichage des donnes pour chaque site 
 var subtitle3 = document.createElement('p');
 subtitle3.classList ='titleResultContainer';  
 subtitle3.innerHTML ="This table represents the annual sum of DNI, for <span>"+sites[s-1]["siteName"]+"</span>. From various databases";
 tableContainer.appendChild(subtitle3);


var table = document.createElement('table');
table.style = "width:50%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = " ";
tr.appendChild(td);
for (var i = 0; i < d; i++){
    td = document.createElement('td');
    td.textContent = siteBd[s-1][i]['bdName'];
    tr.appendChild(td);
}
tbody.appendChild(tr);

tr = document.createElement('tr');
td = document.createElement('td');
td.textContent = "Annual sum of DNI (kWh/m2/an)";
tr.appendChild(td);
var moy = 0;
for (var i = 0; i < d; i++){
    td = document.createElement('td');
    var sum = monthData[s-1][i].reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0)
    mensualSum[s-1][i] = sum;
    td.textContent = sum;
    moy = moy +sum;
    tr.appendChild(td);
}
somMoyAnnual[s-1] = moy/d;

somMoyAnnualList[s-1] = {moyen: moy/d, siteName: sites[s-1]['siteName'], siteId: sites[s-1]['siteId'] };


tbody.appendChild(tr);  
table.appendChild(tbody);


var tablecontainer1 = document.createElement('div');
tablecontainer1.classList="tableResultContainer";
tablecontainer1.appendChild(table);
tableContainer.appendChild(tablecontainer1);

tableContainer.appendChild(document.createElement("br"));
createTableValeurExtremale(containerId,s,d,n);
}

function createTableValeurExtremale(containerId,s,d,n) {
        // Append the table to the container
 var tableContainer = document.getElementById(containerId);
        //title table 4 pour l'affichage des donnes pour chaque site 
var title4 = document.createElement('h1');
 title4.classList ='titleResultContainer';  
 title4.innerHTML ="The extreme value of DNI for <span>"+sites[s-1]["siteName"]+"</span>";
 tableContainer.appendChild(title4);
 
  //sub-title table é pour l'affichage des donnes pour chaque site 
 var subtitle4 = document.createElement('p');
 subtitle4.classList ='titleResultContainer';  
 subtitle4.innerHTML ="This table represents the extreme value of DNI (Max & Min) And the month that get this value, for <span>"+sites[s-1]["siteName"]+"</span>. From various databases";
 tableContainer.appendChild(subtitle4);

var table = document.createElement('table');
table.style = "width:50%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "The extreme value of DNI (kWh/m2)";
tr.appendChild(td);
for (var i = 0; i < d; i++){
    td = document.createElement('td');
    td.textContent = siteBd[s-1][i]['bdName'];
    tr.appendChild(td);
}
tbody.appendChild(tr);
var td ;
var tr = [];
td = document.createElement('td');
td.textContent = "DNI - max value";
tr[0]= document.createElement('tr');
tr[0].appendChild(td);

td = document.createElement('td');
td.textContent = "month for the max value";
tr[1]= document.createElement('tr');
tr[1].appendChild(td);

td = document.createElement('td');
td.textContent = "DNI - min value";
tr[2]= document.createElement('tr');
tr[2].appendChild(td);

td = document.createElement('td');
td.textContent = "month for the min value";
tr[3]= document.createElement('tr');
tr[3].appendChild(td);
for (var i = 0; i < d; i++){
    var tdCell = document.createElement('td');
    var values = monthData[s-1][i];
    var max = Math.max(...values);
    tdCell.textContent = max;
    tr[0].appendChild(tdCell);

    tdCell = document.createElement('td');
    tdCell.textContent = monthName[values.indexOf(max.toString())];
    tr[1].appendChild(tdCell);

    tdCell = document.createElement('td');
    var min = Math.min(...values);
    tdCell.textContent = min;
    tr[2].appendChild(tdCell);

    tdCell = document.createElement('td');
    tdCell.textContent = monthName[values.indexOf(min.toString())];
    tr[3].appendChild(tdCell);
}
tr.forEach(function (tr){
    tbody.appendChild(tr);
});
table.appendChild(tbody);



var tablecontainer1 = document.createElement('div');
tablecontainer1.classList="tableResultContainer";
tablecontainer1.appendChild(table);
tableContainer.appendChild(tablecontainer1);

tableContainer.appendChild(document.createElement("br"));
createTableSaisoniere(containerId,s,d,n);

}

function createTableSaisoniere(containerId,s,d,n) {
        // Append the table to the container
        var tableContainer = document.getElementById(containerId);
//title table 5pour l'affichage des donnes pour chaque site 
var title5 = document.createElement('h1');
 title5.classList ='titleResultContainer';  
 title5.innerHTML ="The seasonal values of DNI for <span>"+sites[s-1]["siteName"]+"</span>";
 tableContainer.appendChild(title5);

  //sub-title table é pour l'affichage des donnes pour chaque site 
 var subtitle5 = document.createElement('p');
 subtitle5.classList ='titleResultContainer';  
 subtitle5.innerHTML ="This table represents the seasonal values of DNI (Summer & spring & autunm & winter), for <span>"+sites[s-1]["siteName"]+"</span>. From various databases";
 tableContainer.appendChild(subtitle5);

var table = document.createElement('table');
table.style = "width:50%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "seasonal sum (kWh/m2/saison)";
tr.appendChild(td);
for (var i = 0; i < d; i++){
    td = document.createElement('td');
    td.textContent = siteBd[s-1][i]['bdName'];
    tr.appendChild(td);
}
tbody.appendChild(tr);

var td ;
var tr = [];
td = document.createElement('td');
td.textContent = "DNI for winter";
tr[0]= document.createElement('tr');
tr[0].appendChild(td);

td = document.createElement('td');
td.textContent = "DNI for spring";
tr[1]= document.createElement('tr');
tr[1].appendChild(td);

td = document.createElement('td');
td.textContent = "DNI for summer";
tr[2]= document.createElement('tr');
tr[2].appendChild(td);

td = document.createElement('td');
td.textContent = "DNI for autunm";
tr[3]= document.createElement('tr');
tr[3].appendChild(td);
for (var i = 0; i < d; i++){
    var tdCell = document.createElement('td');
    var values = monthData[s-1][i];
    tdCell.textContent = parseInt(values[0])+parseInt(values[1])+parseInt(values[2]);
    tr[0].appendChild(tdCell);
    somSaison[s-1][i][0] = parseInt(values[0])+parseInt(values[1])+parseInt(values[2]);

    tdCell = document.createElement('td');
    tdCell.textContent = parseInt(values[3])+parseInt(values[4])+parseInt(values[5]);
    tr[1].appendChild(tdCell);
    somSaison[s-1][i][1]= parseInt(values[3])+parseInt(values[4])+parseInt(values[5]);

    tdCell = document.createElement('td');
    tdCell.textContent = parseInt(values[6])+parseInt(values[7])+parseInt(values[8]);
    tr[2].appendChild(tdCell);
    somSaison[s-1][i][2] = parseInt(values[6])+parseInt(values[7])+parseInt(values[8]);

    tdCell = document.createElement('td');
    tdCell.textContent = parseInt(values[9])+parseInt(values[10])+parseInt(values[11]);
    tr[3].appendChild(tdCell);
    somSaison[s-1][i][3] = parseInt(values[9])+parseInt(values[10])+parseInt(values[11]);

}
tr.forEach(function (tr){
    tbody.appendChild(tr);
});
table.appendChild(tbody);



var tablecontainer1 = document.createElement('div');
tablecontainer1.classList="tableResultContainer";
tablecontainer1.appendChild(table);
tableContainer.appendChild(tablecontainer1);

tableContainer.appendChild(document.createElement("br"));
createLineChartSaison(containerId,s);
createTableOptimiste(containerId,s,d,n);

}

function createTableOptimiste(containerId,s,d,n) {

// creer les tables optemiste et pessemiste
var max,min;
for(var i=0;i<12;i++){
    max = parseInt(monthData[s-1][0][i]);
    min = max;
    for(var j=1; j<bdNumber; j++){
        if(parseInt(monthData[s-1][j][i]) < min)
        min = parseInt(monthData[s-1][j][i]);
        else {
            if(parseInt(monthData[s-1][j][i]) > max)
                max = parseInt(monthData[s-1][j][i]);
            }
    }
    optemiste[s-1][i] = max;
    pessemiste[s-1][i] = min;
}
console.log(optemiste[s-1]);
console.log(pessemiste[s-1]);
var tableOptimiste_bg = document.createElement('div');
tableOptimiste_bg.classList='tableResultContainer';

var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "Optimistic scenariio (High DNI)";
tr.appendChild(td);
monthName.forEach(function (month) {
    var td = document.createElement('td');
    td.textContent = month;
    tr.appendChild(td);
}); 

tbody.appendChild(tr);
tr = document.createElement('tr');
td = document.createElement('td');
td.textContent = 'DNI (kWh/m2/mois)';
tr.appendChild(td);
optemiste[s-1].forEach(function(data){
    td = document.createElement('td');
    td.textContent = data;
    tr.appendChild(td);
});
tbody.appendChild(tr);
table.appendChild(tbody);

var tableContainer = document.getElementById(containerId);
tableOptimiste_bg.appendChild(table);
tableContainer.appendChild(tableOptimiste_bg);

tableContainer.appendChild(document.createElement("br"));
createTablePessimiste(containerId,s,d,n);
}

function createTablePessimiste(containerId,s,d,n) {
 var Pessimiste_bg = document.createElement('div');
Pessimiste_bg.classList="tableResultContainer";

var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "Pessimistic scenario (Weak DNI)";
tr.appendChild(td);
monthName.forEach(function (month) {
    var td = document.createElement('td');
    td.textContent = month;
    tr.appendChild(td);
});
tbody.appendChild(tr);
tr = document.createElement('tr');
td = document.createElement('td');
td.textContent = 'DNI (kWh/m2/mois)';
tr.appendChild(td);
pessemiste[s-1].forEach(function(data){
    td = document.createElement('td');
    td.textContent = data;
    tr.appendChild(td);
});
tbody.appendChild(tr);
table.appendChild(tbody);
var tableContainer = document.getElementById(containerId);
Pessimiste_bg.appendChild(table);
tableContainer.appendChild(Pessimiste_bg);
tableContainer.appendChild(document.createElement("br"));
createTableMoyen(containerId,s,d,n);
}

function createTableMoyen(containerId,s,d,n) {
var Moyen_bg =document.createElement('table'); 
Moyen_bg.classList='tableResultContainer';

var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "Scénario moyen (arithmétique)";
tr.appendChild(td);
monthName.forEach(function (month) {
    var td = document.createElement('td');
    td.textContent = month;
    tr.appendChild(td);
});
tbody.appendChild(tr);
tr = document.createElement('tr');
td = document.createElement('td');
td.textContent = 'DNI (kWh/m2/mois)';
tr.appendChild(td);
for(var i = 0; i < 12; i++){
    var sum = 0;
    for(var j=0; j < d; j++){
        sum = sum + parseInt(monthData[s-1][j][i]);
    }
    var moy = sum / d;
    moyen[s-1][i]=moy;
    td = document.createElement('td');
    td.textContent = moy.toFixed(2);
    tr.appendChild(td);
}
console.log(moyen[s-1]);
tbody.appendChild(tr);
table.appendChild(tbody);
var tableContainer = document.getElementById(containerId);
Moyen_bg.appendChild(table);
tableContainer.appendChild(Moyen_bg);
tableContainer.appendChild(document.createElement("br"));
createLineChartScenarios(containerId,s);

if(s==siteNumber){ 
        console.log("createTableAffichageComp is in x= "+s);
        console.log("site number="+siteNumber);

        createTableAffichageComp();
} else{

        console.log("createTableAffichageComp is OUT x="+s);
        console.log("site number ="+siteNumber);
}

}

function createLineChart(containerId,s) {

var canvas_bg = document.createElement('div');
canvas_bg.classList='grapheResultContainer';

var canvas = document.createElement('canvas');
var dataSets = [] ;
siteBd[s-1].forEach(function(e,index){
    dataSets.push({label: e['bdName'],
        data: monthData[s-1][index],
        borderColor: colors[index],
        borderWidth: 2,
        fill: false });
});
const data = {
    labels: monthName,
    datasets: dataSets
};
const options = {scales: {y: {beginAtZero: true}}};

// Get the canvas element
const ctx = canvas.getContext('2d');

// Create a line chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

var Container = document.getElementById(containerId);


 //title table 1 pour l'affichage des donnes pour chaque site 
 var title22 = document.createElement('h1');
 title22.classList ='titleResultContainer';  
 title22.innerHTML ="Chart monthly DNI data for <span>"+sites[s-1]["siteName"]+"</span>";
 Container.appendChild(title22);

  //sub-title table 1 pour l'affichage des donnes pour chaque site 
 var subtitle2 = document.createElement('p');
 subtitle2.classList ='titleResultContainer';  
 subtitle2.innerHTML ="This Chart represents the monthly data of DNI, for <span>"+sites[s-1]["siteName"]+"</span>. From various databases";
 canvas_bg.appendChild(canvas);
 Container.appendChild(subtitle2);
 Container.appendChild(canvas_bg);
Container.appendChild(document.createElement("br"));
 
}

function createLineChartScenarios(containerId,s) {

var ChartScenarios_bg = document.createElement('div');
ChartScenarios_bg.classList='grapheResultContainer';

var canvas = document.createElement('canvas'); 
var datas = [];
datas.push(optemiste[s-1]);
datas.push(pessemiste[s-1]);
datas.push(moyen[s-1]);
var dataSets = [] ;
var scenarios = ['Optemiste','Pessimiste', 'Moyen'];
scenarios.forEach(function(e,index){
    dataSets.push({label: e,
        data: datas[index],
        borderColor: colors[index],
        borderWidth: 2,
        fill: false });
});
const data = {
    labels: monthName,
    datasets: dataSets
};
const options = {scales: {y: {beginAtZero: true}}};

// Get the canvas element
const ctx = canvas.getContext('2d');

// Create a line chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

var Container = document.getElementById(containerId);
ChartScenarios_bg.appendChild(canvas);
Container.appendChild(ChartScenarios_bg);
Container.appendChild(document.createElement("br"));

}

function createLineChartSaison(containerId,s) {

var LineChartSaison_bg = document.createElement('div');
LineChartSaison_bg.classList='grapheResultContainer';

var Container = document.getElementById(containerId);

//title table 5pour l'affichage des donnes pour chaque site 
var title6 = document.createElement('h1');
 title6.classList ='titleResultContainer';  
 title6.innerHTML ="chart of seasonal values of DNI for <span>"+sites[s-1]["siteName"]+"</span>";
 Container.appendChild(title6);


var canvas = document.createElement('canvas'); 
var dataSets = [];

siteBd[s-1].forEach(function(e,index){
    dataSets.push({label: e['bdName'],
        data: somSaison[s-1][index],
        borderColor: colors[index],
        borderWidth: 2,
        fill: false });
});
const data = {
    labels: saisons,
    datasets: dataSets
};
const options = {scales: {y: {beginAtZero: true}}};

// Get the canvas element
const ctx = canvas.getContext('2d');

// Create a line chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
LineChartSaison_bg.appendChild(canvas);
Container.appendChild(LineChartSaison_bg);
Container.appendChild(document.createElement("br"));


//title table 5pour l'affichage des donnes pour chaque site 
 var title8 = document.createElement('h1');
 title8.classList ='titleResultContainer';  
 title8.innerHTML ="The table & chart of pessimistic and optimistic and average scenarios of DNI for <span>"+sites[s-1]["siteName"]+"</span>";
 Container.appendChild(title8);

  //sub-title table é pour l'affichage des donnes pour chaque site 
 var subtitle8 = document.createElement('p');
 subtitle8.classList ='titleResultContainer';  
 subtitle8.innerHTML ="This table represents pessimistic and optimistic and average scenarios of DNI, for <span>"+sites[s-1]["siteName"]+"</span>. From various databases";
 Container.appendChild(subtitle8);

 

}

function createTableAffichageComp() {

var createTableAffichageComp_bg = document.createElement('div');
createTableAffichageComp_bg.classList='tableResultContainer';


var secContainer = document.getElementById('display-container');
//sub-title table é pour l'affichage des donnes pour chaque site 
var subtitle11 = document.createElement('div');
 subtitle11.classList ='ligne';  
 secContainer.appendChild(subtitle11);

//sub-title table é pour l'affichage des donnes pour chaque site 
 var subtitle9 = document.createElement('h1');
 subtitle9.classList ='titleResultContainer';  
 subtitle9.innerHTML ="<span>THE COMPARISON</span>";
 secContainer.appendChild(subtitle9);

    //sub-title table é pour l'affichage des donnes pour chaque site 
var subtitle10 = document.createElement('P');
subtitle10.classList ='titleResultContainer';  
subtitle10.innerHTML ="This table contains all the data of this project";
secContainer.appendChild(subtitle10);


var container = document.createElement('div');
container.id = 'comparaison-container';

//var comparison_scroll_button = document.getElementById('comparison_scroll_button');
//comparison_scroll_button.addEventListener('click',()=>{
//    
//    const  comparaison_container=`comparaison-container`;
//    const comparaison_container_scr = document.getElementById(comparaison_container);
//  if(comparaison_container_scr){
//    comparaison_container_scr.scrollIntoView();
//  }
//
//});

//var Ranking_scroll_button = document.getElementById('Ranking_scroll_button');
//Ranking_scroll_button.addEventListener('click',()=>{
//    
//    const  Ranking_container=`rankiing_sites`;
//    const Ranking_container_scr = document.getElementById(Ranking_container);
//  if(Ranking_container_scr){
//    Ranking_container_scr.scrollIntoView();
//  }
//
//});
var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "The monthly bulk sum";
tr.appendChild(td);
monthName.forEach(function (month) {
    var td = document.createElement('td');
    td.textContent = month;
    tr.appendChild(td);
});
tbody.appendChild(tr);
for(var k=0; k<siteNumber; k++){
for (var i = 0; i < bdNumber; i++){
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.textContent = sites[k]['siteName'] +' '+siteBd[k][i]['bdName'];
    tr.appendChild(td);
    for(var j = 0; j < 12; j++){
        var tdcell = document.createElement('td');
        tdcell.textContent = monthData[k][i][j];
        tr.appendChild(tdcell);
    }
    tbody.appendChild(tr);
}
}
table.appendChild(tbody);

createTableAffichageComp_bg.appendChild(table);
container.appendChild(createTableAffichageComp_bg);

container.appendChild(document.createElement("br"));
var secContainer = document.getElementById('display-container');
secContainer.appendChild(container);
createTableMensualComp();
}

function createTableMensualComp() {
var createTableMensualComp_bg = document.createElement('div');
createTableMensualComp_bg.classList='tableResultContainer';




var container = document.createElement('div');
container.id = 'comparaison-container';
var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "The average monthly sum";
tr.appendChild(td);
monthName.forEach(function (month) {
    var td = document.createElement('td');
    td.textContent = month;
    tr.appendChild(td);
});
tbody.appendChild(tr);
for(var k=0; k<siteNumber; k++){
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.textContent = sites[k]['siteName'] ;
    tr.appendChild(td);
    console.log(moyen[k]);
    for(var j = 0; j < 12; j++){
        var tdcell = document.createElement('td');
        tdcell.textContent = moyen[k][j].toFixed(2);
        tr.appendChild(tdcell);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);

createTableMensualComp_bg.appendChild(table);
container.appendChild(createTableMensualComp_bg);

container.appendChild(document.createElement("br"));
var secContainer = document.getElementById('comparaison-container');

//sub-title table é pour l'affichage des donnes pour chaque site 
var createTableMensualComp_bg_Title = document.createElement('p');
 createTableMensualComp_bg_Title.classList ='titleResultContainer';  
 createTableMensualComp_bg_Title.innerHTML ="for each location ,we put its own database average";
 secContainer.appendChild(createTableMensualComp_bg_Title);

secContainer.appendChild(container);
createLineChartComp();
}

function createLineChartComp() {
var createLineChartComp_bg = document.createElement('div');
createLineChartComp_bg.classList='grapheResultContainer';

var canvas = document.createElement('canvas'); 
var dataSets = [] ;
sites.forEach(function(e,index){
    dataSets.push({label: e['siteName'],
        data: moyen[index],
        borderColor: colors[index],
        borderWidth: 2,
        fill: false });
});
const data = {
    labels: monthName,
    datasets: dataSets
};
const options = {scales: {y: {beginAtZero: true}}};

// Get the canvas element
const ctx = canvas.getContext('2d');

// Create a line chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

var Container = document.getElementById('comparaison-container');

createLineChartComp_bg.appendChild(canvas);
Container.appendChild(createLineChartComp_bg);
Container.appendChild(document.createElement("br"));
createTableAnnualComp();
}

function createTableAnnualComp() {

var createTableAnnualComp_bg = document.createElement('div');
createTableAnnualComp_bg.classList='table_bg';


var container = document.createElement('div');
container.id = 'comparaison-container';
var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "The annual sum (kWh/m2/an)";
tr.appendChild(td);
var td = document.createElement('td');
td.textContent = "The Average";
tr.appendChild(td);
tbody.appendChild(tr);

sites.forEach(function (site,index) {
    tr = document.createElement('tr');  
    td = document.createElement('td');
    td.textContent = site['siteName'] + ' ' +'The annual DNI';
    tr.appendChild(td);
    td = document.createElement('td');
    var moyAnucom = parseFloat(somMoyAnnual[index]);
    td.textContent = moyAnucom.toFixed(1);
    tr.appendChild(td);
    
tbody.appendChild(tr);
});

table.appendChild(tbody);

createTableAnnualComp_bg.appendChild(table);

container.appendChild(createTableAnnualComp_bg);
container.appendChild(document.createElement("br"));
var secContainer = document.getElementById('comparaison-container');

  //sub-title table é pour l'affichage des donnes pour chaque site 
var createTableAnnualComp_Title= document.createElement('p');
 createTableAnnualComp_Title.classList ='titleResultContainer';  
 createTableAnnualComp_Title.innerHTML ="The annual DNI value of DNI for each site";
 secContainer.appendChild(createTableAnnualComp_Title);

secContainer.appendChild(container);
createLineChartAnnuelComp();
}

function createLineChartAnnuelComp() {
var createLineChartAnnuelComp_bg = document.createElement('div');
createLineChartAnnuelComp_bg.classList='grapheResultContainer';

var canvas = document.createElement('canvas'); 

const names = sites.map(item => item.siteName);
const valeurs = somMoyAnnualList.map(item => item.moyen);
console.log(names);
console.log(valeurs);



// Get the context of the canvas
const ctx = canvas.getContext('2d');

// Create a bar chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Moyen Annuel',
            data: valeurs,
            borderColor: "#1f242d", // Border color of bars
            borderWidth: 3 // Border width of bars
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var Container = document.getElementById('comparaison-container');
createLineChartAnnuelComp_bg.appendChild(canvas);
Container.appendChild(createLineChartAnnuelComp_bg);
Container.appendChild(document.createElement("br"));
createTableClassement();
createTableClassementMenu();

}


function sortByMoyen(a, b) {
return b.moyen - a.moyen;
}

function createTableClassement(){




var createTableClassement_bg = document.createElement('div');
createTableClassement_bg.classList='tableResultContainer';

var sortedList = somMoyAnnualList.sort(sortByMoyen);

var table = document.createElement('table');
table.style = "width:100%";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = "rank";
tr.appendChild(td);
td = document.createElement('td');
td.textContent ="Site";
tr.appendChild(td);
td = document.createElement('td');
td.textContent = "avr-year";
tr.appendChild(td);
tbody.appendChild(tr);

sortedList.forEach(function (site,index) {
    tr = document.createElement('tr'); 
    
    td = document.createElement('td');
    td.textContent = index+1;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = site['siteName'];
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.textContent = site['moyen'].toFixed(2);
    tr.appendChild(td);
    
tbody.appendChild(tr);
});

table.appendChild(tbody);


var Container = document.getElementById('comparaison-container');


var createTableClassement_Ligne = document.createElement('div');
createTableClassement_Ligne.classList ='ligne';  
 Container.appendChild(createTableClassement_Ligne);

//sub-title table é pour l'affichage des donnes pour chaque site 
 var subtitle_createTableClassement_Ligne= document.createElement('h1');
 subtitle_createTableClassement_Ligne.classList ='titleResultContainer'; 
 subtitle_createTableClassement_Ligne.id ='rankiing_sites';   
 subtitle_createTableClassement_Ligne.innerHTML ="<span>THE RANKING</span>";
 Container.appendChild(subtitle_createTableClassement_Ligne);
 Container.appendChild(document.createElement("br"));
 Container.appendChild(document.createElement("br"));


 
createTableClassement_bg.appendChild(table);
Container.appendChild(createTableClassement_bg);
Container.appendChild(document.createElement("br"));

}

function createTableClassementMenu(){




  var createTableClassement_bg = document.createElement('div');
  createTableClassement_bg.classList='tableResultContainer';
  
  var sortedList = somMoyAnnualList.sort(sortByMoyen);
  
  var table = document.createElement('table');
  table.style = "width:100%";
  var tbody = document.createElement('tbody');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = "ran";
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent ="Site";
  tr.appendChild(td);

  
  sortedList.forEach(function (site,index) {
      tr = document.createElement('tr'); 
      
      td = document.createElement('td');
      td.textContent = index+1;
      tr.appendChild(td);
  
      td = document.createElement('td');
      td.textContent = site['siteName'];
      tr.appendChild(td);
      
  tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  

   
  createTableClassement_bg.appendChild(table);
  
  var optin_classemenet = document.getElementById("optin_classemenet");
  optin_classemenet.appendChild(createTableClassement_bg);
  }
  





