 // Function to execute when the screen size matches the condition
 function executeScript() {
  // Your script code here
  console.log("Script executed!");
}

// Function to check the screen size and execute the script
function checkScreenSize() {
  // Get the current screen width
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  // Check if the screen width meets your desired condition (e.g., less than 768px)
  if (screenWidth < 1040) {
      window.addEventListener('scroll', function() {
          var aboutMeElement = document.querySelector('.about-me');
          var windowHeight = window.innerHeight;
          var elementTop = aboutMeElement.getBoundingClientRect().top;
          var elementBottom = aboutMeElement.getBoundingClientRect().bottom;
        
          // Calculate the middle 50% of the screen
          var middleStart = windowHeight * 0;
          var middleEnd = windowHeight * .7;
        
          // Add or remove the "transformed" class based on the element's position
          if (elementTop > middleStart && elementBottom < middleEnd) {
            aboutMeElement.classList.add('transformed');
          } else {
            aboutMeElement.classList.remove('transformed');
          }
        });
      }
  }


// Event listener to check the screen size when the DOM is ready
document.addEventListener('DOMContentLoaded', checkScreenSize);

// Event listener to check the screen size whenever the window is resized
window.addEventListener('resize', checkScreenSize);