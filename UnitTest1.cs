using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
namespace SeleniumTestWordcollect
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var driver1 = new ChromeDriver();
            driver1.Navigate().GoToUrl("http://127.0.0.1:5503/index.html");
            var title = driver1.Title;
            Assert.AreEqual("Webcam info", title);
            driver1.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            IWebElement IdNumber = driver1.FindElement(By.XPath("//*[@id=\"app\"]/div[1]/table/tbody/tr[6]/td[1]"));
            Assert.AreEqual("5", IdNumber.Text);
            driver1.Quit();


        }
    }
}