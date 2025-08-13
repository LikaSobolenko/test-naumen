import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private mockData = [
  {
    "id": 1,
    "name": "John Doe",
    "active": true,
    "email": "john.doe@techlabs.io"
  },
  {
    "id": 2,
    "name": "Alice Smith",
    "active": false,
    "email": "alice.smith@digitalhorizon.com"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "active": true,
    "email": "bob.johnson@cloudnexus.net"
  },
  {
    "id": 4,
    "name": "Emma Brown",
    "active": false,
    "email": "emma.brown@innovatech.ai"
  },
  {
    "id": 5,
    "name": "Michael Davis",
    "active": true,
    "email": "michael.davis@cybermatrix.org"
  },
  {
    "id": 6,
    "name": "Sophia Wilson",
    "active": true,
    "email": "sophia.wilson@quantumsoft.dev"
  },
  {
    "id": 7,
    "name": "William Taylor",
    "active": false,
    "email": "william.taylor@neuralwarp.tech"
  },
  {
    "id": 8,
    "name": "Olivia Martinez",
    "active": true,
    "email": "olivia.martinez@datastream.co"
  },
  {
    "id": 9,
    "name": "James Anderson",
    "active": false,
    "email": "james.anderson@binaryflux.io"
  },
  {
    "id": 10,
    "name": "Charlotte Thomas",
    "active": true,
    "email": "charlotte.thomas@codevortex.net"
  },
  {
    "id": 11,
    "name": "Benjamin White",
    "active": false,
    "email": "benjamin.white@quantumleap.ai"
  },
  {
    "id": 12,
    "name": "Amelia Harris",
    "active": true,
    "email": "amelia.harris@neurochip.org"
  },
  {
    "id": 13,
    "name": "Henry Clark",
    "active": false,
    "email": "henry.clark@cloudforge.dev"
  },
  {
    "id": 14,
    "name": "Mia Lewis",
    "active": true,
    "email": "mia.lewis@datasphere.tech"
  },
  {
    "id": 15,
    "name": "Alexander Walker",
    "active": false,
    "email": "alexander.walker@bitnova.co"
  },
  {
    "id": 16,
    "name": "Ella Hall",
    "active": true,
    "email": "ella.hall@deepmind.io"
  },
  {
    "id": 17,
    "name": "Daniel Young",
    "active": false,
    "email": "daniel.young@futurepulse.net"
  },
  {
    "id": 18,
    "name": "Scarlett King",
    "active": true,
    "email": "scarlett.king@quantara.ai"
  },
  {
    "id": 19,
    "name": "Joseph Wright",
    "active": false,
    "email": "joseph.wright@cybercore.org"
  },
  {
    "id": 20,
    "name": "Lily Scott",
    "active": true,
    "email": "lily.scott@neuralink.dev"
  }
];

  getUsers(): Observable<any[]> {
    return of(this.mockData).pipe(delay(300));
  }
}