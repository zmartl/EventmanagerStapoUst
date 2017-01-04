﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventmanagerStapoUst.Models;

namespace EventmanagerStapoUst.Controllers
{
    [RoutePrefix("api/events")]
    public class EventController : ApiController
    {
        private readonly EventInformation[] _events = new EventInformation[]
        {
            new EventInformation
            {
                Id = 1,
                EventName = "Uschter Fäscht",
                EventLocation = "Uster, Stadtzentrum",
                StartDateTime = DateTime.Now,
                EndDateTime = DateTime.Now.AddDays(5),
                Permission = "test"
            },
            new EventInformation
            {
                Id = 2,
                EventName = "Geburtstagsparty Rico",
                EventLocation = "Uster, Landihalle",
                StartDateTime = DateTime.Now,
                EndDateTime = DateTime.Now.AddDays(5),
                Permission = "test"
            }
        };

        public IEnumerable<EventInformation> Get()
        {
            return _events;
        }

        public IHttpActionResult Get(int id)
        {
            var entity = _events.FirstOrDefault(x => x.Id == id);

            if(entity == null) return NotFound();

            return Ok(entity);
        }
    }
}