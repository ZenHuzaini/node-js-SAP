namespace petShelter;

using {
    Language,
    Country
} from '@sap/cds/common';

entity Animals {
    key ID         : Integer;
        name       : String;
        age        : Integer;
        owner      : Association to Owners;
        animalType : Association to AnimalTypes;
}

entity AnimalTypes {
    key ID         : Integer;
        animalType : String;
        animals    : Association to many Animals
                         on animals.animalType = $self;
        shelters   : Association to many Shelther
                         on shelters.animalType = $self;
}

entity Owners {
    key ID      : Integer;
        name    : String;
        address : String;
        animals : Association to many Animals
                      on animals.owner = $self;
}

entity Shelther {
    key ID                : Integer;
        animalType        : Association to AnimalTypes;
        totalCapacity     : Integer;
        availableCapacity : Integer;
}

entity SheltherBooking {
    key ID       : Integer;
        date     : Date;
        country  : Country;
        shelther : Association to Shelther;
        animal   : Association to Animals;
}
