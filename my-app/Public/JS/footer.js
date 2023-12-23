const footerCode = () => {
    const footerContent = document.getElementsByClassName('footerContent');
    const footerInnerHtmlCode = `<p> Copyright &copy; 2023 goodmorning.com || All right reserved!</p>
    <p>Designed by <a href="./about">Learn Code Hack</a></p>
    <p>Contact Us: <a href="./contact">learncodehackjoshi@gmail.com</a></p>`
    footerContent[0].innerHTML = footerInnerHtmlCode; 
};

footerCode();