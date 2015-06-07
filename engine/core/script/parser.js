WebVN.extend("script", function (exports) {
var require = function(){},
exp = exports;
exports = {};
/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,15],$V1=[1,14],$V2=[1,12],$V3=[1,13],$V4=[1,11],$V5=[1,16],$V6=[1,13,14,15,16,17,22,23],$V7=[1,18],$V8=[1,23],$V9=[1,13,14,15,16,17,20,22,23],$Va=[21,26];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Root":3,"Body":4,"Line":5,"Expression":6,"If":7,"CodeLine":8,"CodeBlock":9,"Command":10,"Label":11,"Function":12,"LABEL":13,"COMMAND":14,"CODE_LINE":15,"CODE_BLOCK":16,"IF":17,"CONDITION":18,"Block":19,"ELSE":20,"{":21,"}":22,"FUNCTION":23,"FUNCTION_NAME":24,"ParamList":25,"PARAM":26,"$accept":0,"$end":1},
terminals_: {2:"error",13:"LABEL",14:"COMMAND",15:"CODE_LINE",16:"CODE_BLOCK",17:"IF",18:"CONDITION",20:"ELSE",21:"{",22:"}",23:"FUNCTION",24:"FUNCTION_NAME",26:"PARAM"},
productions_: [0,[3,0],[3,1],[4,1],[4,2],[5,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[11,1],[10,1],[8,1],[9,1],[7,3],[7,3],[7,3],[19,2],[19,3],[12,4],[12,3],[25,1],[25,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = ""
break;
case 2:
return this.$ = $$[$0]
break;
case 3: case 11: case 12: case 23:
this.$ = $$[$0]
break;
case 4:
this.$ = $$[$0-1] + $$[$0]
break;
case 5:
this.$ = yy.expression($$[$0])
break;
case 6:
this.$ = yy.ifWrapper($$[$0])
break;
case 7: case 8:
this.$ = yy.code($$[$0])
break;
case 9:
this.$ = yy.command($$[$0])
break;
case 10:
this.$ = yy.label($$[$0])
break;
case 13: case 14: case 15:
yy.lineNum(yylineno); this.$ = $$[$0]
break;
case 16:
yy.lineNum(yylineno); this.$ = yy["if"]($$[$0-1], $$[$0])
break;
case 17: case 18:
this.$ = yy.ifElse($$[$0-2], $$[$0])
break;
case 19:
this.$ = yy.block("")
break;
case 20:
this.$ = yy.block($$[$0-1])
break;
case 21:
this.$ = yy["function"]($$[$0-2], $$[$0-1], $$[$0])
break;
case 22:
this.$ = yy["function"]($$[$0-1], $$[$0])
break;
case 24:
this.$ = yy.paramList($$[$0-1], $$[$0])
break;
}
},
table: [{1:[2,1],3:1,4:2,5:3,6:4,7:5,8:6,9:7,10:8,11:9,12:10,13:$V0,14:$V1,15:$V2,16:$V3,17:$V4,23:$V5},{1:[3]},{1:[2,2],5:17,6:4,7:5,8:6,9:7,10:8,11:9,12:10,13:$V0,14:$V1,15:$V2,16:$V3,17:$V4,23:$V5},o($V6,[2,3]),o($V6,[2,5]),o($V6,[2,6],{20:$V7}),o($V6,[2,7]),o($V6,[2,8]),o($V6,[2,9]),o($V6,[2,10]),o($V6,[2,11]),{18:[1,19]},o($V6,[2,14]),o($V6,[2,15]),o($V6,[2,13]),o($V6,[2,12]),{24:[1,20]},o($V6,[2,4]),{7:21,17:$V4,19:22,21:$V8},{19:24,21:$V8},{19:26,21:$V8,25:25,26:[1,27]},o($V6,[2,17],{20:$V7}),o($V9,[2,18]),{4:29,5:3,6:4,7:5,8:6,9:7,10:8,11:9,12:10,13:$V0,14:$V1,15:$V2,16:$V3,17:$V4,22:[1,28],23:$V5},o($V9,[2,16]),{19:30,21:$V8,26:[1,31]},o($V6,[2,22]),o($Va,[2,23]),o($V9,[2,19]),{5:17,6:4,7:5,8:6,9:7,10:8,11:9,12:10,13:$V0,14:$V1,15:$V2,16:$V3,17:$V4,22:[1,32],23:$V5},o($V6,[2,21]),o($Va,[2,24]),o($V9,[2,20])],
defaultActions: {},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
exp.parser = exports.parser
});