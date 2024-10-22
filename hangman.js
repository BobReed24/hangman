/**
* Hangman in Vanilla Javascript
* @see https://github.com/jelofsson/hangman-js
* @author jelofsson
**/
var Hangman = (function () {
    'use strict';

    /**
     * Constructor
     * @param {string} elId An ID used in this class and when rendering the DOM Elements
     */
    function Hangman(elId) {
        // DOM is ready
        this.elId       = elId;
        // Possible words
        this.words      = [
            'ALTERNATE', 'GUSTFUL', 'ACUATION', 'TAKINGLY', 'RELAUNCH', 'GOADSMAN', 'OVERCROP', 'SYNTACTICIAN', 'OPIPAROUS', 'PSEUDOBRANCHIAL', 'GEOPHYTIC', 'ESEBRIAS', 'NONTARIFF', 'DIVERSIFIER', 'AEROPHAGY', 'SURREY', 'UNEVOLVED', 'GUSTO', 'BAYARD', 'PIEZOMETER', 'AERAGE', 'SACATON', 'SAMMY', 'QUEERISHNESS', 'STARSHINE', 'GROUNDLY', 'WHALEBIRD', 'SOCIOLEGAL', 'UNTENABLENESS', 'OXFORD', 'OTOPHARYNGEAL', 'PIROUETTER', 'IRASCIBILITY', 'DANIELE', 'CROTAPHIC', 'DEPOETIZE', 'AUTOCOMBUSTIBLE', 'PENTATHLON', 'CAROLI', 'SOLENOIDAL', 'DIACRITIC', 'INCONCLUSIVE', 'NAUTICS', 'BROWNER', 'MONITORIAL', 'ROADLESSNESS', 'RASSE', 'KERATOGLOBUS', 'INDAMINE', 'HEXAGYNIA', 'GREEDINESS', 'SHEAFY', 'SERPIGINOUSLY', 'THERMOPLASTIC', 'SKEIPP', 'KAIWI', 'ADACTYLISM', 'WIENIE', 'KARABAGH', 'GAMBIST', 'IRREPAIR', 'URINAEMIA', 'WHITEBARK', 'MEMORIZER', 'COSSIDAE', 'UNCANDIDNESS', 'GRAZIERY', 'GRANATE', 'V', 'BILHARZIOSIS', 'NONDIVISIBLE', 'ANISOPLEUROUS', 'INFRAMERCURIAL', 'AKROCHORDITE', 'NONDECLARER', 'WRONGNESS', 'COMAL', 'SEMIMUTE', 'GONDOLIER', 'UNSCRUPULOUSLY', 'UPSTEAM', 'ANOLIS', 'HYPERCRITICISM', 'ZUTUGIL', 'MOWING', 'PHOTOSYNTHESIZE', 'LIFELINE', 'UNRECREATED', 'LIPOCLASTIC', 'SALLYWOOD', 'COLORMAKER', 'HYLOPATHIST', 'COVETIVENESS', 'SOFTBRAINED', 'NONCONTENT', 'CORDATE', 'AUTOMATICALLY', 'BARATHRUM', 'ASSIMILATORY', 'ATTENTIVENESS', 'CARANDA', 'PROCRASTINATION', 'DEHISCENCE', 'RUNTINESS', 'INTERRACIALISM', 'COILED', 'PROCLISIS', 'SERIOLA', 'LOBATED', 'OOSPORIFEROUS', 'AMORAL', 'HOMOPHONE', 'CASSICUS', 'CYCLOSTOMIDAE', 'ROBUSTIOUS', 'DOORFRAME', 'IRIDENTROPIUM', 'CHROMIDROSIS', 'REAK', 'CICHLID', 'FORGIVABLY', 'KIWANIAN', 'CHAFFINESS', 'STOLEWISE', 'DEFLECTED', 'DECIMESTRIAL', 'TERRAPENE', 'HEMATINURIA', 'DEUCEDLY', 'CARANGIDAE', 'SOUNDLESSNESS', 'SMITH', 'INDIRECTLY', 'INTERFRET', 'DYSMENORRHEAL', 'PLANULAR', 'PEDICELLUS', 'RESURRECTIBLE', 'GOSSAN', 'WORSHIPABILITY', 'APLACENTALIA', 'CYCLOPHORIC', 'CLASS', 'TOTTERINGLY', 'DIDELPHOID', 'SCUTATION', 'NEPHELINITIC', 'EVOCATIVE', 'INSTIPULATE', 'DETERMINATE', 'FINABLENESS', 'ENCOMPASSER', 'NIDULARIA', 'STIKINE', 'SYLLABLE', 'PLANKTONIC', 'GLUISH', 'NONPRONUNCIATION', 'UNEMPHATICALLY', 'UNSTRENGTH', 'ABSTRACTIVELY', 'PARISH', 'UNSOCIABLENESS', 'OUTSTORM', 'MISHANDLE', 'BOTTLEMAN', 'LEADINGLY', 'WAIREPO', 'ASPHYXIATIVE', 'HEADSTREAM', 'BOWINGLY', 'IDOLOLATRICAL', 'MASTURBATORY', 'ADMONISHMENT', 'PALAEOMETALLIC', 'MACROCLIMATE', 'PARAMORPHOUS', 'AMPHIMICTICAL', 'GABE', 'ADRAMMELECH', 'AUSTENITE', 'CHEMIATRIC', 'HYDROSCOPICAL', 'XANTHIONE', 'ORATORICALLY', 'LORICATION', 'PERSIAN', 'TETRAGLOTTIC', 'CANNONRY', 'PSITTACIDAE', 'FREEDMAN', 'THUMPING', 'SUASORY', 'MAMMALITY', 'BOYCOTTAGE', 'CABOOSE', 'MOTMOT', 'ANTIHYDROPIN', 'TOLLKEEPER', 'MUSCADINE', 'PENTANGULAR', 'CAMBIST', 'TOTITIVE', 'ANONYM', 'POPULIN', 'MONIMOSTYLIC', 'NYMPHLIKE', 'RESTITUTE', 'POSTTRAUMATIC', 'PHOTOFINISHING', 'BACCHANALIANISM', 'PARAENESIS', 'REASONER', 'CURST', 'PHIALFUL', 'DISS', 'GLYOXALIN', 'GLAREPROOF', 'GRITTEN', 'CHERUBIM', 'UNPASSIONATE', 'HEROINIZE', 'OVERCAPTIOUSNESS', 'CYPRINIDAE', 'SEMIHUMANITARIAN', 'OUTPOISON', 'RHOMBOIDEUS', 'NONRECOVERABLE', 'PROKE', 'AESTHETICISM', 'INGUEN', 'SULPHOCARBONIC', 'TACKETY', 'AUTOECIC', 'GRUMOSE', 'ARSENOBENZENE', 'FODER', 'PEPPERIDGE', 'MALEFACTOR', 'NONYIELDING', 'RETROLINGUAL', 'GAVEL', 'PROCHRONISM', 'SPORTING', 'TORRENTWISE', 'ARGYLE', 'MOORMAN', 'AMBARELLA', 'HYPOPHAMINE', 'REDEMOLISH', 'PALEOSTRIATAL', 'SUPERFLUOUS', 'OBNEBULATE', 'CLASSIFICATIONAL', 'AERUGINOUS', 'BALI', 'ANTEPENDIUM', 'CONGRUENT', 'MACROPLEURAL', 'NEOLALIA', 'COMPATRIOTIC', 'CHARADRINE', 'SNEATH', 'MONOLOGUE', 'PYRULOID', 'FEVERISHNESS', 'SHILF', 'VAGUE', 'THERMOELECTROMOTIVE', 'DESOLATING', 'UNDEIFICATION', 'FILTHY', 'ONCOMING', 'SUNDARI', 'TOBIAS', 'PERISPHINCTIDAE', 'UNDISSONANT', 'INDEPENDENCY', 'PROTOCERATIDAE', 'BETRAMPLE', 'AUDITIVE', 'SUBETHERIC', 'THEOLOGICONATURAL', 'NOVELNESS', 'SALNATRON', 'HYDROXAMIC', 'HEARTEN', 'TEPAL', 'WELSHY', 'BASTARDIZATION', 'FRANCOPHILISM', 'BARRELER', 'AUSLAUT', 'FORETOKEN', 'CALCEIFORM', 'POSTEROTEMPORAL', 'GERYONIIDAE', 'WATERFALL', 'REDUNDANCY', 'EDUCATION', 'ALKINE', 'JUGLANS', 'PALEOETHNOGRAPHY', 'CITIZENISH', 'WENT', 'GEOSTATICS', 'DUNTLE', 'TRANSPICUITY', 'INSUFFERABLE', 'PRISTIS', 'REGRESSIVITY', 'HEROIFY', 'THURBERIA', 'CORRIGENT', 'CORRECTRESS', 'CAEDMONIAN', 'PSEUDOSPHERICAL', 'OVERWOMAN', 'WOOLPACK', 'BRIDELACE', 'DYAUS', 'GOMASHTA', 'BETTONGA', 'BROOKSIDE', 'SPRAYLIKE', 'TRANSSEPULCHRAL', 'SACCHARASE', 'TILE', 'TROLLDOM', 'COREGONID', 'UNCALCAREOUS', 'OPSONOGEN', 'ODONTOLITE', 'CONDUCTITIOUS', 'LAGETTA', 'CHUVASH', 'RUPICOLA', 'GNATHOPHOROUS', 'GOBIOIDEI', 'TEMPLARLIKE', 'SEAGHAN', 'QUELLER', 'THERMO', 'TERRITORIAL', 'SEAWARDLY', 'UROLOGIST', 'CHOREOGRAPHER', 'ABASK', 'LAPPONESE', 'MANTOLOGIST', 'NAYARIT', 'UREDEMA', 'REBONE', 'UNHESITATINGLY', 'FALLTIME', 'UNITARIAN', 'ZOARCES', 'CRYOSCOPY', 'MELOSPIZA', 'JEMIMA', 'OPHICEPHALIDAE', 'PROCURATORSHIP', 'ARANEINA', 'LEMAIREOCEREUS', 'LIBELANT', 'PALINODY', 'POLYARTICULAR', 'PROSOPOPOEIA', 'SPINELIKE', 'EDNA', 'CORRIGIBILITY', 'AWIDE', 'CUPELLATION', 'SECURABLE', 'DIATESSARON', 'RESOLVE', 'THYMOPRIVOUS', 'BEDULL', 'UNFORMATIVE', 'SUPPLICATIVE', 'SWARTNESS', 'CONCLUDING', 'THOS', 'FERNERY', 'TRANSUMPT', 'POLYSEPALOUS', 'LIBELLULOID', 'ADNATION', 'KIOSK', 'TONTO', 'KERATINOUS', 'ZORGITE', 'CORREPTION', 'PHARISEEISM', 'DROW', 'UMBELLIC', 'PRETERSENSUAL', 'APERU', 'PALEORNITHOLOGICAL', 'VAMPER', 'STEREOCAMERA', 'OUTVALUE', 'LES', 'COPPERYTAILED', 'BARBITURATE', 'IMPLEADABLE', 'COPRODAEUM', 'HOMOTYPIC', 'PRECONSTITUTE', 'ISOLINOLENIC', 'PATERNALITY', 'TOPMOST', 'MORPHOLOGICAL', 'TUBERCULA', 'PHTHISIOGENETIC', 'INCOMPREHENDED', 'CATELECTROTONUS', 'DIVIDING', 'UNREGRETFULNESS', 'UNKEMPT', 'CORNUATED', 'SCAMBLE', 'UNOWN', 'PROCREATORY', 'PUNCTUATOR', 'HEMOGENOUS', 'PANIVOROUS', 'DEVITRIFY', 'UNSARCASTIC', 'RIDGING', 'EFFODIENTIA', 'PROCONSULARY', 'CAISSONED', 'NARRATER', 'DEGENERESCENCE', 'COPEPOD', 'UNDISCERNIBLENESS', 'SADIE', 'LOCULAMENT', 'SHEEPBERRY', 'SATURN', 'GEODIFEROUS', 'VOLCAN', 'PRETERSEASONABLE', 'DEMIURGICAL', 'PAILLASSE', 'NAPOLEONIST', 'REMIGES', 'SCRAFFLE', 'FLAVERIA', 'OPSONOPHILIC', 'INSOMUCH', 'MYCETOLOGY', 'AMYGDALOPATHY', 'RECITATION', 'DIASCOPE', 'UNDEREARTH', 'INGESTA', 'STRUMA', 'SEROTOXIN', 'WIENER', 'AFORESAID', 'EXTRANORMAL', 'WHIRRET', 'IMMEASURED', 'PLEURISEPTATE', 'GREENHIDE', 'GOWNSMAN', 'CEPHALOPHINE', 'PREPOSTEROUSNESS', 'PHENARSINE', 'CHROMATINIC', 'FLAGELLOSIS', 'WISEACREISM', 'CHLOROFORMIC', 'CACHUCHA', 'JACKETING', 'UNPROPITIATEDNESS', 'NUDICAUL', 'TARTARISM', 'SIKH', 'DOGPROOF', 'PRAECORDIUM', 'CARTOGRAPHIC', 'INCONSOLABLE', 'PRURITUS', 'ENCLITICAL', 'DEMIDISTANCE', 'PAPERBACK', 'SUPEROPOSTERIOR', 'SNOWBERG', 'SEPTICALLY', 'GESTICULANT', 'NONSENSICALITY', 'WATTAGE', 'DERMANAPLASTY', 'SIPHONOSTOMATOUS', 'CRIMINOLOGIST', 'TURNED', 'APII'
        ];
    }

    /**
     * Resets the hangman game
     */
    Hangman.prototype.reset = function () {
        // Variables
        this.STOPPED        = false;
        this.MISTAKES       = 0;
        this.GUESSES        = [];
        // Select a random word from the list
        this.WORD           = this.words[Math.floor(Math.random() * this.words.length)];
        // DOM Elements
        this.hideElementByClass('h');
        this.showElementByIdWithContent(this.elId + "_guessbox", null);
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
    };

    /**
     * Logic after the user guessed on a letter
     *
     * @param {char} letter A letter guessed by our enduser
     */
    Hangman.prototype.guess = function (letter) {
        letter = letter.charAt(0).toUpperCase();

        // Check if game is stopped or the user already guessed on that letter
        if (this.STOPPED || this.GUESSES.indexOf(letter) > -1) {
            // Then we wont do anything
            return;
        }

        // Add the letter to our GUESSES array
        this.GUESSES.push(letter);
        // Update the word hint, and guessed letter list for the user
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
        this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));

        // Check if our word does not contain the guessed letter
        if (this.WORD.indexOf(letter) < 0) {
            // Incorrect guess, increase our mistakes by one
            this.MISTAKES++;
            // Show next part of hangman character
            this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);
            // Check if its Game Over
            if (this.MISTAKES === 6) {
                this.showElementByIdWithContent(this.elId + "_end", "GAME OVER!<br/>The word was: " + this.WORD);
                this.STOPPED = true;
            }
        } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {
            // Victory condition
            this.showElementByIdWithContent(this.elId + "_end", "You made it!<br/>The word was: " + this.WORD);
            this.STOPPED = true;
        }
    };

    /**
     * Displays HTML element by id with the following content
     *
     * @param {string} elId     DOM ID
     * @param {HTML} content 
     */
    Hangman.prototype.showElementByIdWithContent = function (elId, content) {
        if (content !== null) {
            document.getElementById(elId).innerHTML = content;
        }
        document.getElementById(elId).style.opacity = 1;
    };

    /**
     * Hides element by class
     *
     * @param {string} elClass DOM class
     */
    Hangman.prototype.hideElementByClass = function (elClass) {
        var elements = document.getElementsByClassName(elClass), i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0;
        }
    };

    /**
     * The word but only with letters the user has guessed so far is visible
     */
    Hangman.prototype.getGuessedfWord = function () {
        var result = "", i;
        for (i = 0; i < this.WORD.length; i++) {
            // Word characters
            result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
                    this.WORD[i] : "_";
        }
        return result;
    };

    // Create and return an instance of this class, its go time!
    return new Hangman('hangm');    
}());
