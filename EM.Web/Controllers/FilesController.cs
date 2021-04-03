using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace EM.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class FilesController : Controller
    {
        private const string FilesFolderName = "Files";
        private const string PdfContentType = "application/pdf";

        private readonly IWebHostEnvironment _appEnvironment;

        public FilesController(IWebHostEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }

        [HttpGet]
        public IActionResult GetFile(string fileName)
        {
            var filePath = Path.Combine(_appEnvironment.ContentRootPath, FilesFolderName, fileName);

            var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);

            return File(fileStream, PdfContentType);
        }
    }
}