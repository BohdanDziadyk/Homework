// let textArea = document.getElementById("textArea");
// textArea.oninput = () => {
//         localStorage.setItem("textArea", textArea.value);
//     };
//=========================================================
// let textInput = document.form1.textInput;
// let numInput = document.form1.numInput;
// let checkbox1 = document.form1.checkbox1;
// let radio = document.form1.radio1;
// let radio1 = document.getElementById("radio1");
// let radio2 = document.getElementById("radio2");
// let localText = localStorage.getItem("name");
// if(localText){
//     textInput.value = localText;
// }
// let localNum = localStorage.getItem("phone");
// if(localNum){
//     numInput.value = localNum;
// }
// let localCheckbox = JSON.parse(localStorage.getItem("remember_user"));
// if(localCheckbox){
//     checkbox1.checked = localCheckbox;
// }
// let localRadio = localStorage.getItem("user_type");
// if(localRadio){
//     radio.value = localRadio;
// }
// textInput.oninput = () => {
//   localStorage.setItem("name",textInput.value);
// };
// numInput.oninput = () => {
//   localStorage.setItem("phone",numInput.value);
// };
// checkbox1.onclick = () => {
//     localStorage.setItem("remember_user",checkbox1.checked);
// };
// radio1.onchange = () => {
//   localStorage.setItem("user_type",radio1.value);
// };
// radio2.onchange = () => {
//   localStorage.setItem("user_type",radio2.value);
// };
//===============================================================
// let textArea = document.getElementById("textArea");
// let subBtn = document.getElementById("submitBtn");
// let undoBtn = document.getElementById("undoBtn");
// let redoBtn = document.getElementById("redoBtn");
// let localtext = localStorage.getItem("currentText");
// if(localtext){
//     textArea.value = localtext;
// }
// textArea.oninput = () => {
//     localStorage.setItem("currentText", textArea.value);
// };
// let i = JSON.parse(localStorage.getItem("versions"));
// if(!i){
//     i = 0;
// }
// let buff = i;
// subBtn.onclick = () => {
//     i++;
//     localStorage.setItem(`textVersion${i}`,textArea.value);
//     localStorage.setItem("versions",JSON.stringify(i));
//     buff = i;
// };
// undoBtn.onclick = () => {
//     buff--;
//      if(buff >= 1) {
//          textArea.value = localStorage.getItem(`textVersion${buff}`);
//           localStorage.setItem("currentText", textArea.value);
//      }
//      else {
//          buff++;
//      }
// };
// redoBtn.onclick = () => {
//     buff++;
//     if(buff <= i) {
//         textArea.value = localStorage.getItem(`textVersion${buff}`);
//         localStorage.setItem("currentText", textArea.value);
//     }
//     else{
//         buff--;
//     }
// };
// ========================================================
