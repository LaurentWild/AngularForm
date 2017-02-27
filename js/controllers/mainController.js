// MAIN CONTROLLER
function mainController($scope) {

     $scope.myForm = {};
     $scope.onButtonClick = function() {
          let tTab = [$scope.myForm.firstname, $scope.myForm.lastname, $scope.myForm.email];
          console.log(tTab);
          document.querySelector('#tabs').innerHTML = `
               <table>
                    <tbody>
                         <tr>
                              <td>Prénom : ${$scope.myForm.firstname}</td>
                         </tr>
                         <tr>
                              <td>Nom : ${$scope.myForm.lastname}</td>
                         </tr>
                         <tr>
                              <td>Prénom : ${$scope.myForm.email}</td>
                         </tr>
                    </tbody>
               </table>`;

     }
}
