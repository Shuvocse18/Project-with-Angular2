using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace ProjectWebApiService.Controllers
{
    public class ProjectDataController : ApiController
    {
        
        public IEnumerable<Project> Get() {

            using (ProjectDBEntities5 entity = new ProjectDBEntities5())
            {
               return  entity.Projects.ToList();
            }

        }

        public Project Get(int id)
        {

            using (ProjectDBEntities5 entity = new ProjectDBEntities5())
            {
                return entity.Projects.FirstOrDefault(p=>p.Id==id);
            }

        }
    }

}
