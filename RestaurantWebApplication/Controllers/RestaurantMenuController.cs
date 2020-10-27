using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.IO;
using System.Threading.Tasks;

namespace RestaurantWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantMenuController : ControllerBase
    {
        private readonly IOptions<MyConfig> config;

        public RestaurantMenuController(IOptions<MyConfig> config)
        {
            this.config = config;
        }

        [HttpGet("DisplayFile/{fileName}")]
        public async Task<IActionResult> DisplayFile(string fileName)
        {
            MemoryStream ms = new MemoryStream();

            if (CloudStorageAccount.TryParse(config.Value.StorageConnection, out CloudStorageAccount storageAccount))
            {
                CloudBlobClient BlobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer container = BlobClient.GetContainerReference(config.Value.Container);

                if (await container.ExistsAsync())
                {
                    CloudBlockBlob blob = container.GetBlockBlobReference(fileName);

                    if (await blob.ExistsAsync())
                    {
                        string contents = blob.DownloadTextAsync().Result;
                        return Content(contents);
                    }
                    else
                    {
                        return Content("File does not exist");
                    }
                }
                else
                {
                    return Content("Container does not exist");
                }
            }
            else
            {
                return Content("Error opening storage");
            }
        }
    }
}
