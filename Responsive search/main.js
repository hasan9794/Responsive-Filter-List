var companyData = {
    Users: {
        User_1: {
            Name: "Amber",
            User_id: "12345",
            membership: "Premium"
        },

        User_2: {
            Name: "Ashraf",
            User_id: "12346",
            membership: "Silver"
        },

        User_3: {
            Name: "Bilal",
            User_id: "12347",
            membership: "Gold"
        },
        User_4: {
            Name: "Babar",
            User_id: "12347",
            membership: "Gold"
        },
        User_5: {
            Name: "Calvin",
            User_id: "12347",
            membership: "Gold"
        },
        User_6: {
            Name: "Christiana",
            User_id: "12347",
            membership: "Gold"
        }
    }

}
var list = [];
for (var key in companyData) {
    for (var key2 in companyData[key]) {
        list.push(companyData[key][key2].Name);
        // console.log(list);
    }
}
// alert(list[3]);

var ul = document.getElementById("name-list");
for (var i = 0; i < list.length; i++) {
    var newLi = document.createElement("li");
    newLi.innerText = list[i];
    ul.appendChild(newLi);
}

function algo() {
    var input = document.getElementById("input-value");
    var li = document.getElementsByTagName("li");
    input = input.value.toUpperCase();

    for (var i = 0; i < li.length; i++) {

        if (li[i].innerHTML.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}


