using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace EventmanagerStapoUst.Models
{
    public class EventInformation
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public string EventLocation { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string Permission { get; set; }
    }
}