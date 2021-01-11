using {petShelter} from '../db/model';

service PetShetherService {
    entity Owners @readonly            as projection on petShelter.Owners;
    entity AnimalTypes @readonly       as projection on petShelter.AnimalTypes;
    entity Animals @readonly           as projection on petShelter.Animals;
    entity Shelther @readonly          as projection on petShelter.Shelther;
    entity SheltherBooking @insertonly as projection on petShelter.SheltherBooking;
}
