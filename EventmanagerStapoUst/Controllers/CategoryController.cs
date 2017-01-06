using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using EventmanagerStapoUst.Models;

namespace EventmanagerStapoUst.Controllers
{
    [RoutePrefix("api/category")]
    public class CategoryController : ApiController
    {
        private readonly Category[] _categories =
        {
            new Category
            {
                Id = 1,
                Name = "Informationsstand"
            },
            new Category
            {
                Id = 2,
                Name = "Uster Fest"
            }
        };

        public IEnumerable<Category> Get()
        {
            return _categories.OrderBy(x => x.Name);
        }

        public IHttpActionResult Get(int id)
        {
            var entity = _categories.FirstOrDefault(x => x.Id == id);

            if (entity == null) return NotFound();

            return Ok(entity);
        }
    }
}