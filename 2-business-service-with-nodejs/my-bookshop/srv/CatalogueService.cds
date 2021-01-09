using my.bookshop as my from '../db/DataModel'; //string '' , very strict

//this Catalogue will be the endpoint, localhost:4004/catalogue
//if you change this service name eg: MyService so you have to update your database
//the endpoint witll change to localhost:4004/My
service CatalogueService {
    entity Books @readonly    as projection on my.Books; //@readonly it means only read, post or delete or put wont be permitted
    entity Authors @readonly  as projection on my.Authors;
    entity Orders @insertonly as projection on my.Orders; //only insert will be allowed (post)
}
