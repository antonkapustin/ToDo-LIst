export const renderToDom = function (dataArray, template) {
    const fragment = document.createDocumentFragment();

    // template example
    // '<div class="title">{{name}}{{title}}</div>'

    // 1. get all uniqe KEYS from template
    // 2. parse temaplte with replacing values from dataArray[i] by KEYS
    // 3. return fragment

    // your code should goes here

    let element;

    for(let i=0; i<dataArray.length; i++) {
      element = document.createElement("div");
      let keyIcon = /data.icon/;
      let resultIcon = template.replace(keyIcon, `${dataArray[i].icon}`);
      let keyName = /data.name/;
      let resultName = resultIcon.replace(keyName, `${dataArray[i].name}`);
      let keyAbout = /data.about/;
      let resultAbout = resultName.replace(keyAbout, `${dataArray[i].about || "" }`);;
      element.innerHTML = resultAbout;
      fragment.appendChild(element);
    };

console.log(fragment);
    return fragment;
  };