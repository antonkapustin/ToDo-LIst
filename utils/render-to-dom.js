    // template example
    // '<div class="title">{{name}}{{title}}</div>'

    // 1. get all uniqe KEYS from template
    // 2. parse temaplte with replacing values from dataArray[i] by KEYS
    // 3. return fragment

    // your code should goes here

   export const renderToDom = (data, template) => {
      // TODO: increase formula
      // let matchMarkers = template.match(/{{[\w.[\]]+}}/g);

      let matchMarkers = template.match(/{{.+?}}/gi);

      // let matchKeys = template.match(/[^{{]+[^}]}/g);
      let matchKeys = template.match(/(?<={{).+?(?=}})/gi);

      // TODO: increase formula to remove next line
      // matchKeys = matchKeys.map((item) => item.slice(0, -1));

      let result = template;

     
      let hard = [];

   

    //   matchMarkers.forEach((element, i) => {
    //     // TODO: increase method to have possebility replace situtations like:
    //     // {{parents[0]}}
    //     // {{address.town}}
    //     // {{notes[0].text}}
        
    //     if(data[matchKeys[i]] === undefined){
    //         hard.push(matchKeys[i]);
    //         // // hard.forEach((element, i)=>{
    //         // //     result = result.replace(element, data.hard[i]);
    //         // })

    //     }

    //     result = result.replace(element, data[matchKeys[i]]);
    //   });

    //   let res = hard.reduce((total, amount, index)=>{
    //     amount.hard[index].forEach((element, i)=>{
    //         result = result.replace(element, data.matchKeys[i])
    //     })
    // });

    let res = matchMarkers.reduce((total, amount, i)=>{
        if(data[matchKeys[i]] === undefined){
            let a = matchKeys[i].forEach((item)=>{
                return item
            })
            console.log(a);

        }
// console.log(data[matchKeys[i]]);
        return total = result.replace(amount, data[matchKeys[i]]);
    })

      // NOTE: make sure that lengths of `matchMarkers` and `matchKeys` are equals
      console.log(matchMarkers);
      console.log(matchKeys);
    //   console.log(result);
      console.log(res);
    //   console.log(hard);


      return result;
    };

    renderToDom(
      {
        firstName: "Alex",
        secondName: "Green",
        email: "alex.green@mail.com",
        age: 14,
        phoneNumber: "+123-456-789",
        parents: ["John Smith"],
        address: {
          town: "Grodno",
          postalcode: "230034"
        },
        notes: [
          {
            text: "unemployed since 2020",
            date: new Date()
          },
          {
            text: "got married in 2019",
            date: new Date()
          }
        ]
      },
      `<div class="user">
        <p class="name">{{firstName}} <{{email}}></p>
        <p class="username">{{firstName}} {{secondName}} is {{age}} years old.</p>
        <p class="phone">Phone: {{phoneNumber}}</p>
        <p class="parents">Parents: {{parents[0]}}</p>
        <p class="address">Address: {{address.town}}</p>
        <p class="notes">Notes:</p>
        <p class="notes">- {{notes[0].text}}</p>
        <p class="notes">- {{notes[1].text}}</p>
        <p class="text">Should not be escaped {{}} {{ }} {{  }}
      </div>`
    );
    
    // You should get this result in the end.
    // lengths of matches array is 10
    /*
    `<div class="user">
        <p class="name">Alex <alex.green@mail.com></p>
        <p class="username">Alex Green is 14 years old.</p>
        <p class="phone">Phone: +123-456-789</p>
        <p class="parents">Parents: John Smith</p>
        <p class="address">Address: Grodno</p>
        <p class="notes">Notes:</p>
        <p class="notes">- unemployed since 2020</p>
        <p class="notes">- got married in 2019</p>
    
        <p class="text">Should not be escaped {{}} {{ }} {{  }}
      </div>`;
    */