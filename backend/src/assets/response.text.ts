const responseText = `
  Welcome to TALENTIFY.COM - We make it happen!<br><br>

  Available Endpoints:<br><br>
  
  1. /api/auth<br>
     - Description: Authentication routes (login, register, etc.)<br>
     - Methods: 
       <pre>
       {
         "signup": {
           "method": "POST",
           "url": "/api/auth/signup"
           "request": {
             "email": "string (required)",
             "password": "string (required)",
             "fullName": "string (required)",
             "role": "string (optional, valid values: USER, RECRUITER)"
           }
         },
         "login": {
           "method": "POST",
           "url": "/api/auth/login"
           "request": {
             "email": "string (required)",
             "password": "string (required)"
           }
         }
       }
       </pre><br>

  2. /api/company<br>
     - Description: Company management (create, read, delete companies)<br>
     - Methods:
       <pre>
       {
         "create": {
           "method": "POST",
           "request": {
             "name": "string (required)",
             "address": "string (required)",
             "email": "string (required)",
             "category": "string (required)",
             "website": "string (optional)",
             "country": "string (required)"
           }
         },
         "getById": {
           "method": "GET",
           "url": "/api/company/{:id}",
           "request": {
             "id": "number (required)"
           }
         },
         "delete": {
           "method": "DELETE",
            "url": "/api/company/{:id}",
           "request": {
             "id": "number (required)"
           }
         }
       }
       </pre><br>

  3. /api/profiles<br>
     - Description: Profile management (create, read, delete profiles)<br>
     - Methods:
       <pre>
       {
         "create": {
           "method": "POST",
           "request": {
             "about": "string (required)",
             "phone": "string (required)",
             "resume": "string (required)",
             "address": "string (required)"
           }
         },
         "getById": {
           "method": "GET",
           "url": "/api/profiles/{:id}",
           "request": {
             "id": "number (required)"
           }
         },
         "delete": {
           "method": "DELETE",
           "url": "/api/profiles/{:id}",
           "request": {
             "id": "number (required)"
           }
         }
       }
       </pre><br>

  4. /api/offers<br>
     - Description: Offer management (create, read, delete offers)<br>
     - Methods:
       <pre>
       {
         "create": {
           "method": "POST",
           "request": {
             "title": "string (required)",
             "description": "string (required)",
             "owner": "number (required)",
             "salary": "string (required)",
             "requirements": "string (required)",
             "location": "string (required)",
             "modality": "string (required)",
             "status": "string (required, valid values: OPEN, CLOSED)",
             "creationDate": "date (optional)",
             "applications": [
               {
                 "userId": "number (required)",
                 "status": "string (required, valid values: APPLIED, REVIEWED, INTERVIEW, OFFER, REJECTED)"
               }
             ]
           }
         },
         "getById": {
           "method": "GET",
           "request": {
             "url": "/api/offers/{:id}",
             "id": "number (required)"
           }
         },
         "delete": {
           "method": "DELETE",
           "request": {
             "url": "/api/offers/{:id}",
             "id": "number (required)"
           }
         }
       }
       </pre><br>
  
`;

export default responseText;

