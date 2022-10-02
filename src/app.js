



//Classes

class Project {

    constructor(name, teams, budget, profit, isLegacy, size, custRelScore) {
        this.name = name;
        this.teams = teams;
        this.budget = budget;
        this.profit = profit;
        this.isLegacy = isLegacy;
        this.size = size;
        this.custRelScore = custRelScore;
    }
}

class Team {
    constructor(name, resources, effeciency, moral, quality, synergy, knowledge, experience, leadership, taskResolution) {
        this.name = name;
        this.resources = resources;
        this.effeciency = effeciency;
        this.moral = moral;
        this.quality = quality;
        this.synergy = synergy;
        this.knowledge = knowledge;
        this.experience = experience;
        this.leadership = leadership;
        this.taskResolution = taskResolution;
    }
}

class Development extends Team {
    constructor(senDevCount, junDevCount, specRealis, codeEff, codeReu, bugCreation) {
        this.senDevCount = senDevCount;
        this.junDevCount = junDevCount;
        this.specRealis = specRealis;
        this.codeEff = codeEff;
        this.codeReu = codeReu;
        this.bugCreation = bugCreation;
    }
}

class Testing extends Team {
    constructor(codeCoverage) {
        this.codeCoverage = codeCoverage;

    }
}

class Design extends Team {
    constructor(userEx, reqReal, designConformity) {
        this.userEx = userEx;
        this.reqReal = reqReal;
        this.designConformity = designConformity;
    }
}

class ProjectManager extends Team {
    constructor(teamRel, organisation, delegation, planning) {
        this.teamRel = teamRel;
        this.organisation = organisation;
        this.delegation = delegation;
        this.planning = planning;
    }
}

class ProductOwner extends Team {
    constructor(custRel, research) {
        this.custRel = custRel;
        this.research = research;
    }
}

class Marketing extends Team {
    constructor(chosenMedia, eventsAttended, companyProfile) {
        this.chosenMedia = chosenMedia;
        this.eventsAttended = eventsAttended;
        this.companyProfile = companyProfile;

    }
}

class Support extends Team {
    constructor(custSatis, callHand, bugDisc) {
        this.custSatis = custSatis;
        this.callHand = callHand;
        this.bugDisc = bugDisc;
    }
}

class Budget {
    constructor(development, support, server, hosting, marketing, software) {
        this.development = development;
        this.support = support;
        this.server = server;
        this.hosting = hosting;
        this.marketing = marketing;
        this.software = software;
    }
}

class SizeOfProject {
    constructor(customers, dataSet, complexity, platforms, softArch) {
        this.customers = customers;
        this.dataSet = dataSet;
        this.complexity = complexity;
        this.platforms = platforms;
        this.softArch = softArch;
    }
}

class SoftwareArchetucture {
    constructor(frontend, backend, serverStru, codeEff, codeReu) {
        this.frontend = frontend;
        this.backend = backend;
        this.serverStru = serverStru;
        this.codeEff = codeEff;
        this.codeReu = codeReu;
    }
}

class CustomerRelationshipScore {
    constructor(productOwnerScore, supportScore, companyProfileScore) {
        this.productOwnerScore = productOwnerScore;
        this.supportScore = supportScore;
        this.companyProfileScore = companyProfileScore;
    }
}


function daily() {


}


// make random funcions for events


//alocation of resources
//training needed
// risk assesed
// pricing and potential profits
// proposed additional features
//research into pre-existing app
//potential restructuring/new developments needed






//events

let run = document.getElementById('run-simulation');

run.addEventListener("click", () => {
    console.log("run");
});