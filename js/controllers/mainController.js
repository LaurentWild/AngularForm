// MAIN CONTROLLER
function mainController($scope) {

     $scope.myForm = {};
     $scope.onButtonClick = function() {
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
