export const renderToDom = (data, template) => {

      let matchMarkers = template.match(/{{\w.+?}}/gi);

      let matchKeys = template.match(/(?<={{)\w.+?(?=}})/gi);

      let keys = matchKeys.map((element)=>{
        element = element.replace("[",".").replace("]", "");
        return element.split(".");

      })

      let result = template;

      matchMarkers.forEach((element, i) => {
        let value = keys[i].reduce((sum, curr)=>{
          return sum[curr];
        },data);

        result = result.replace(element, value);
      });
      
      //console.log(result);
      return result;
    };

    // renderToDom(
    //   {
    //     firstName: "Alex",
    //     secondName: "Green",
    //     email: "alex.green@mail.com",
    //     age: 14,
    //     phoneNumber: "+123-456-789",
    //     parents: ["John Smith"],
    //     address: {
    //       town: "Grodno",
    //       postalcode: "230034"
    //     },
    //     notes: [
    //       {
    //         text: "unemployed since 2020",
    //         date: new Date()
    //       },
    //       {
    //         text: "got married in 2019",
    //         date: new Date()
    //       }
    //     ]
    //   },
    //   `<div class="user">
    //     <p class="name">{{firstName}} <{{email}}></p>
    //     <p class="username">{{firstName}} {{secondName}} is {{age}} years old.</p>
    //     <p class="phone">Phone: {{phoneNumber}}</p>
    //     <p class="parents">Parents: {{parents[0]}}</p>
    //     <p class="address">Address: {{address.town}}</p>
    //     <p class="notes">Notes:</p>
    //     <p class="notes">- {{notes[0].text}}</p>
    //     <p class="notes">- {{notes[1].text}}</p>
    //     <p class="text">Should not be escaped {{}} {{ }} {{  }}
    //   </div>`
    // );