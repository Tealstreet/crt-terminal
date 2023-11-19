import React, { useState, useRef, useEffect, memo } from 'react';

var Keyboard;
(function (Keyboard) {
    Keyboard["ARROW_DOWN"] = "ArrowDown";
    Keyboard["ARROW_LEFT"] = "ArrowLeft";
    Keyboard["ARROW_RIGHT"] = "ArrowRight";
    Keyboard["ARROW_UP"] = "ArrowUp";
    Keyboard["END"] = "End";
    Keyboard["HOME"] = "Home";
    Keyboard["PAGE_DOWN"] = "PageDown";
    Keyboard["PAGE_UP"] = "PageUp";
    Keyboard["DELETE"] = "Delete";
    Keyboard["BACKSPACE"] = "Backspace";
    Keyboard["ENTER"] = "Enter";
})(Keyboard || (Keyboard = {}));

var exhaustiveCheck = function (msg) {
    return function (arg) {
        throw new Error("".concat(msg).concat(arg));
    };
};

var moveActions = [
    Keyboard.ARROW_LEFT,
    Keyboard.ARROW_RIGHT,
    Keyboard.HOME,
    Keyboard.END,
];
var setOfActions$4 = new Set(moveActions);
var isMoveActions = function (str) { return setOfActions$4.has(str); };
var moveLeft = function (cursorPosition) {
    var newPos = cursorPosition - 1;
    return newPos < 0 ? 0 : newPos;
};
var moveRight = function (cursorPosition, lastPosition) {
    var newPos = cursorPosition + 1;
    return newPos > lastPosition ? lastPosition : newPos;
};
var moveHome = function () { return 0; };
var moveEnd = function (lastPosition) { return lastPosition; };
var checkMoveActions = exhaustiveCheck('Invalid move action: ');
var newPosition$2 = function (_a, key) {
    var cursorPosition = _a.cursorPosition, lastPosition = _a.lastPosition;
    switch (key) {
        case Keyboard.ARROW_LEFT:
            return moveLeft(cursorPosition);
        case Keyboard.ARROW_RIGHT:
            return moveRight(cursorPosition, lastPosition);
        case Keyboard.HOME:
            return moveHome();
        case Keyboard.END:
            return moveEnd(lastPosition);
        default:
            checkMoveActions(key);
    }
    return cursorPosition;
};
var moveCursor = function (_a, key) {
    var renderValue = _a.renderValue, cursorPosition = _a.cursorPosition, inputValue = _a.inputValue;
    var lastPosition = renderValue.length;
    return {
        renderValue: renderValue,
        cursorPosition: newPosition$2({ cursorPosition: cursorPosition, lastPosition: lastPosition }, key),
        inputValue: inputValue,
    };
};

var preventedActions = [
    Keyboard.ARROW_DOWN,
    Keyboard.ARROW_LEFT,
    Keyboard.ARROW_RIGHT,
    Keyboard.ARROW_UP,
    Keyboard.END,
    Keyboard.HOME,
    Keyboard.PAGE_DOWN,
    Keyboard.PAGE_UP,
    Keyboard.DELETE,
    Keyboard.BACKSPACE,
    Keyboard.ENTER,
];
var setOfActions$3 = new Set(preventedActions);
var isPreventedActions = function (str) { return setOfActions$3.has(str); };
var preventActions = function (event) {
    event.preventDefault();
};

var submitActions = [Keyboard.ENTER];
var setOfActions$2 = new Set(submitActions);
var isSubmitActions = function (str) { return setOfActions$2.has(str); };
var DEFAULT_INPUT = '';
var DEFAULT_RENDER = [];
var DEFAULT_POSITION = 0;
var submit = function () { return ({
    inputValue: DEFAULT_INPUT,
    renderValue: DEFAULT_RENDER,
    cursorPosition: DEFAULT_POSITION,
}); };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var removeActions = [Keyboard.BACKSPACE, Keyboard.DELETE];
var setOfActions$1 = new Set(removeActions);
var isRemoveActions = function (str) { return setOfActions$1.has(str); };
var checkRemoveActions = exhaustiveCheck('Invalid remove action: ');
var newPosition$1 = function (newCursorPosition, lastPosition) {
    if (newCursorPosition < 0)
        return 0;
    if (newCursorPosition > lastPosition)
        return lastPosition;
    return newCursorPosition;
};
var newRender$1 = function (renderValue, removePosition) { return __spreadArray(__spreadArray([], renderValue.slice(0, removePosition), true), renderValue.slice(removePosition + 1), true); };
var newValue = function (inputValue, removePosition) {
    return "".concat(inputValue.substring(0, removePosition)).concat(inputValue.substring(removePosition + 1));
};
var handleBackspace = function (props) {
    var renderValue = props.renderValue, inputValue = props.inputValue, cursorPosition = props.cursorPosition;
    var prevPosition = cursorPosition - 1;
    if (prevPosition < 0)
        return props;
    return {
        renderValue: newRender$1(renderValue, prevPosition),
        inputValue: newValue(inputValue, prevPosition),
        cursorPosition: newPosition$1(prevPosition, renderValue.length),
    };
};
var handleDelete = function (props) {
    var renderValue = props.renderValue, inputValue = props.inputValue, cursorPosition = props.cursorPosition;
    if (cursorPosition === renderValue.length)
        return props;
    return {
        renderValue: newRender$1(renderValue, cursorPosition),
        inputValue: newValue(inputValue, cursorPosition),
        cursorPosition: newPosition$1(cursorPosition, renderValue.length - 1),
    };
};
var remove = function (props, key) {
    switch (key) {
        case Keyboard.BACKSPACE:
            return handleBackspace(props);
        case Keyboard.DELETE:
            return handleDelete(props);
        default:
            checkRemoveActions(key);
    }
    return props;
};

var newPosition = function (_a) {
    var oldLength = _a.oldLength, newLength = _a.newLength, cursorPosition = _a.cursorPosition;
    var wasLast = oldLength === cursorPosition;
    if (wasLast)
        return newLength;
    // if inserting text in middle of line
    if (cursorPosition < oldLength && newLength > oldLength)
        return cursorPosition + 1;
    return cursorPosition;
};
var newRender = function (_a) {
    var renderValue = _a.renderValue, cursorPosition = _a.cursorPosition, newInput = _a.newInput;
    var oldLength = renderValue.length;
    var delta = newInput.length - renderValue.length;
    var addedCharacters = newInput.substring(cursorPosition, cursorPosition + delta);
    return __spreadArray(__spreadArray(__spreadArray([], renderValue.slice(0, cursorPosition), true), addedCharacters.split(''), true), renderValue.slice(cursorPosition, oldLength), true);
};
var press = function (_a) {
    var newInput = _a.newInput, renderValue = _a.renderValue, cursorPosition = _a.cursorPosition;
    if (!newInput)
        throw new Error('Cannot press without a new input');
    if (newInput.length < renderValue.length)
        throw new Error('New input is shorter then old one');
    return {
        inputValue: newInput,
        renderValue: newRender({ newInput: newInput, renderValue: renderValue, cursorPosition: cursorPosition }),
        cursorPosition: newPosition({
            oldLength: renderValue.length,
            newLength: newInput.length,
            cursorPosition: cursorPosition,
        }),
    };
};

var serviceActions = [Keyboard.ARROW_UP, Keyboard.ARROW_DOWN];
var setOfActions = new Set(serviceActions);
var isServiceActions = function (str) { return setOfActions.has(str); };
var checkServiceActions = exhaustiveCheck('Invalid service action: ');
var handleHistoryMove = function (serviceFunction) {
    var inputValue = serviceFunction();
    var cursorPosition = inputValue.length;
    var renderValue = inputValue.split('');
    return { renderValue: renderValue, inputValue: inputValue, cursorPosition: cursorPosition };
};
var provideService = function (_a, key) {
    var renderValue = _a.renderValue, inputValue = _a.inputValue, cursorPosition = _a.cursorPosition, _b = _a.services, nextCommand = _b.nextCommand, prevCommand = _b.prevCommand;
    switch (key) {
        case Keyboard.ARROW_UP:
            return handleHistoryMove(prevCommand);
        case Keyboard.ARROW_DOWN:
            return handleHistoryMove(nextCommand);
        default:
            checkServiceActions(key);
    }
    return { renderValue: renderValue, inputValue: inputValue, cursorPosition: cursorPosition };
};

var defaultState$3 = {
    renderValue: [],
    inputValue: '',
    cursorPosition: 0,
};
function useCommandLine() {
    var _a = useState(defaultState$3.inputValue), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState(defaultState$3.renderValue), renderValue = _b[0], setRenderValue = _b[1];
    var _c = useState(defaultState$3.cursorPosition), cursorPosition = _c[0], setCursorPosition = _c[1];
    var setState = function (_a) {
        var newRenderValue = _a.renderValue, newInputValue = _a.inputValue, newCursorPosition = _a.cursorPosition;
        if (renderValue !== newRenderValue)
            setRenderValue(newRenderValue);
        if (inputValue !== newInputValue)
            setInputValue(newInputValue);
        if (cursorPosition !== newCursorPosition)
            setCursorPosition(newCursorPosition);
    };
    var preventDefault = function (event) { return preventActions(event); };
    var addCharacter = function (newInput) {
        return setState(press({ renderValue: renderValue, inputValue: inputValue, cursorPosition: cursorPosition, newInput: newInput }));
    };
    var setInput = function (newInput) {
        return setState({
            renderValue: newInput.split(''),
            inputValue: newInput,
            cursorPosition: newInput.length,
        });
    };
    var removeCharacter = function (key) {
        return setState(remove({ renderValue: renderValue, inputValue: inputValue, cursorPosition: cursorPosition }, key));
    };
    var moveCommandCursor = function (key) {
        return setState(moveCursor({ renderValue: renderValue, inputValue: inputValue, cursorPosition: cursorPosition }, key));
    };
    var submitCommand = function () { return setState(submit()); };
    var provideCommandService = function (key, services) {
        return setState(provideService({ renderValue: renderValue, inputValue: inputValue, cursorPosition: cursorPosition, services: services }, key));
    };
    return {
        state: {
            inputValue: inputValue,
            renderValue: renderValue,
            cursorPosition: cursorPosition,
        },
        handlers: {
            preventDefault: preventDefault,
            addCharacter: addCharacter,
            setInput: setInput,
            moveCommandCursor: moveCommandCursor,
            removeCharacter: removeCharacter,
            submitCommand: submitCommand,
            provideCommandService: provideCommandService,
        },
    };
}

function useCommandLineInput() {
    var inputElementRef = useRef(null);
    var setInputCursor = function (cursorPosition) {
        if (inputElementRef.current) {
            inputElementRef.current.selectionStart = cursorPosition;
            inputElementRef.current.selectionEnd = cursorPosition;
        }
    };
    var focus = function () { var _a; return (_a = inputElementRef.current) === null || _a === void 0 ? void 0 : _a.focus(); };
    return { state: { inputElementRef: inputElementRef }, handlers: { focus: focus, setInputCursor: setInputCursor } };
}

var DEFAULT_COMMAND = '';
var next$1 = function (_a) {
    var commandsHistory = _a.commandsHistory, oldCursorPosition = _a.cursorPosition;
    var lastIndex = commandsHistory.length - 1;
    var nextIndex = oldCursorPosition + 1;
    var cursorPosition = lastIndex < nextIndex ? commandsHistory.length : nextIndex;
    var command = commandsHistory[cursorPosition] || DEFAULT_COMMAND;
    return { commandsHistory: commandsHistory, cursorPosition: cursorPosition, command: command };
};
var prev = function (_a) {
    var commandsHistory = _a.commandsHistory, oldCursorPosition = _a.cursorPosition;
    var prevIndex = oldCursorPosition - 1;
    var cursorPosition = prevIndex < 0 ? -1 : prevIndex;
    var command = commandsHistory[cursorPosition] || DEFAULT_COMMAND;
    return { commandsHistory: commandsHistory, cursorPosition: cursorPosition, command: command };
};
var add = function (_a) {
    var commandsHistory = _a.commandsHistory, command = _a.command, maxHistoryCommands = _a.maxHistoryCommands;
    var commandsLength = commandsHistory.length;
    var lastIndex = commandsLength - 1;
    var sameCommand = commandsHistory[lastIndex] === command;
    if (sameCommand)
        return { commandsHistory: commandsHistory, cursorPosition: commandsLength };
    var canAppend = commandsLength < maxHistoryCommands;
    if (canAppend)
        return {
            commandsHistory: __spreadArray(__spreadArray([], commandsHistory, true), [command], false),
            cursorPosition: commandsLength + 1,
        };
    var canReplace = Boolean(commandsLength);
    if (canReplace) {
        return {
            commandsHistory: __spreadArray(__spreadArray([], commandsHistory.slice(1), true), [command], false),
            cursorPosition: commandsLength,
        };
    }
    return { commandsHistory: commandsHistory, cursorPosition: commandsLength };
};

var defaultState$2 = {
    commandsHistory: [],
    cursorPosition: 0,
};
function useCommandHistory(_a) {
    var maxHistoryCommands = _a.maxHistoryCommands;
    var _b = useState(defaultState$2.commandsHistory), commandsHistory = _b[0], setCommandsHistory = _b[1];
    var _c = useState(defaultState$2.cursorPosition), cursorPosition = _c[0], setCursorPosition = _c[1];
    var setState = function (_a) {
        var newCommandsHistory = _a.commandsHistory, newCursorPosition = _a.cursorPosition;
        if (commandsHistory !== newCommandsHistory)
            setCommandsHistory(newCommandsHistory);
        if (cursorPosition !== newCursorPosition)
            setCursorPosition(newCursorPosition);
    };
    var addCommand = function (command) {
        setState(add({ maxHistoryCommands: maxHistoryCommands, commandsHistory: commandsHistory, command: command }));
    };
    var nextCommand = function () {
        var _a = next$1({
            commandsHistory: commandsHistory,
            cursorPosition: cursorPosition,
        }), command = _a.command, rest = __rest(_a, ["command"]);
        setState(rest);
        return command;
    };
    var prevCommand = function () {
        var _a = prev({
            commandsHistory: commandsHistory,
            cursorPosition: cursorPosition,
        }), command = _a.command, rest = __rest(_a, ["command"]);
        setState(rest);
        return command;
    };
    return {
        state: {
            commandsHistory: commandsHistory,
        },
        handlers: {
            addCommand: addCommand,
            nextCommand: nextCommand,
            prevCommand: prevCommand,
        },
    };
}

var printWords = function (_a) {
    var remainingWords = _a.remainingWords, printedWords = _a.printedWords, charactersToPrint = _a.charactersToPrint;
    var firstWord = remainingWords[0];
    if (!firstWord)
        return { printedWords: printedWords, remainingWords: null, wordFullyPrinted: true };
    var printedChunk = firstWord.characters.slice(0, charactersToPrint);
    var printedLength = printedChunk.length;
    if (printedLength === charactersToPrint) {
        if (printedLength < firstWord.characters.length) {
            return {
                printedWords: __spreadArray(__spreadArray([], printedWords, true), [__assign(__assign({}, firstWord), { characters: printedChunk })], false),
                remainingWords: __spreadArray([
                    __assign(__assign({}, firstWord), { characters: firstWord.characters.slice(printedLength) })
                ], remainingWords.slice(1), true),
                wordFullyPrinted: false,
            };
        }
        return {
            printedWords: __spreadArray(__spreadArray([], printedWords, true), [firstWord], false),
            remainingWords: remainingWords.slice(1),
            wordFullyPrinted: true,
        };
    }
    return printWords({
        remainingWords: remainingWords.slice(1),
        printedWords: __spreadArray(__spreadArray([], printedWords, true), [firstWord], false),
        charactersToPrint: charactersToPrint - printedLength,
    });
};

var combineWords = function (_a) {
    var prevWord = _a.prevWord, nextWord = _a.nextWord, wordFullyPrinted = _a.wordFullyPrinted;
    return prevWord && nextWord && !wordFullyPrinted
        ? __assign(__assign({}, prevWord), { characters: prevWord.characters + nextWord.characters }) : nextWord;
};
var makeWordChunk = function (_a) {
    var firstWord = _a.firstWord, printedWords = _a.printedWords;
    if (!firstWord)
        return printedWords;
    return __spreadArray([firstWord], printedWords.slice(1), true);
};
var appendWordChunk = function (_a) {
    var printedWordsPrev = _a.printedWordsPrev, wordChunk = _a.wordChunk, wordFullyPrintedPrev = _a.wordFullyPrintedPrev;
    return wordFullyPrintedPrev
        ? __spreadArray(__spreadArray([], printedWordsPrev, true), wordChunk, true) : __spreadArray(__spreadArray([], printedWordsPrev.slice(0, printedWordsPrev.length - 1), true), wordChunk, true);
};
var getRemainingLine = function (_a) {
    var remainingLine = _a.remainingLine, remainingWords = _a.remainingWords;
    return remainingWords && remainingWords.length > 0 ? __assign(__assign({}, remainingLine), { words: remainingWords }) : null;
};
var printLine = function (_a) {
    var remainingLine = _a.remainingLine, printedLine = _a.printedLine, charactersToPrint = _a.charactersToPrint, wordFullyPrintedPrev = _a.wordFullyPrinted;
    var printedWordsPrev = printedLine.words;
    var _b = printWords({
        remainingWords: remainingLine.words,
        printedWords: [],
        charactersToPrint: charactersToPrint,
    }), printedWords = _b.printedWords, remainingWords = _b.remainingWords, wordFullyPrinted = _b.wordFullyPrinted;
    var prevWord = printedWordsPrev[printedWordsPrev.length - 1];
    var nextWord = printedWords[0];
    var firstWord = combineWords({ prevWord: prevWord, nextWord: nextWord, wordFullyPrinted: wordFullyPrintedPrev });
    var wordChunk = makeWordChunk({ firstWord: firstWord, printedWords: printedWords });
    return {
        remainingLine: getRemainingLine({ remainingLine: remainingLine, remainingWords: remainingWords }),
        printedLine: __assign(__assign({}, printedLine), { words: appendWordChunk({ printedWordsPrev: printedWordsPrev, wordChunk: wordChunk, wordFullyPrintedPrev: wordFullyPrintedPrev }) }),
        wordFullyPrinted: wordFullyPrinted,
    };
};

var combinePrintedLines = function (_a) {
    var printedLines = _a.printedLines, printedLine = _a.printedLine, newLine = _a.newLine;
    return newLine
        ? __spreadArray(__spreadArray([], printedLines, true), [printedLine], false) : __spreadArray(__spreadArray([], printedLines.slice(0, printedLines.length - 1), true), [printedLine], false);
};
var combineRemainingLines = function (_a) {
    var remainingLines = _a.remainingLines, remainingLine = _a.remainingLine;
    var lines = !remainingLine
        ? remainingLines.slice(1)
        : __spreadArray([remainingLine], remainingLines.slice(1), true);
    return lines.length > 0 ? lines : null;
};
var printMultiline = function (_a) {
    var remainingLines = _a.remainingLines, printedLines = _a.printedLines, wordFullyPrinted = _a.wordFullyPrinted, newLine = _a.newLine, charactersToPrint = _a.charactersToPrint;
    var firstLine = remainingLines[0];
    if (!firstLine)
        return {
            newLine: newLine,
            wordFullyPrinted: wordFullyPrinted,
            printedLines: printedLines,
            remainingLines: null,
        };
    var _b = printLine({
        remainingLine: firstLine,
        printedLine: newLine ? __assign(__assign({}, firstLine), { words: [] }) : printedLines[printedLines.length - 1],
        charactersToPrint: charactersToPrint,
        wordFullyPrinted: wordFullyPrinted,
    }), remainingLine = _b.remainingLine, printedLine = _b.printedLine, wordFullyPrintedAfterPrint = _b.wordFullyPrinted;
    return {
        newLine: !remainingLine,
        wordFullyPrinted: wordFullyPrintedAfterPrint,
        printedLines: combinePrintedLines({ printedLines: printedLines, printedLine: printedLine, newLine: newLine }),
        remainingLines: combineRemainingLines({ remainingLines: remainingLines, remainingLine: remainingLine }),
    };
};

var makeNewState = function (_a) {
    var prevState = _a.prevState, printedLinesNext = _a.printedLinesNext, newLine = _a.newLine;
    return newLine
        ? __spreadArray(__spreadArray([], prevState, true), printedLinesNext, true) : __spreadArray(__spreadArray([], prevState.slice(0, prevState.length - 1), true), printedLinesNext, true);
};
var printer = function (_a) {
    var remainingLines = _a.remainingLines, printedLines = _a.printedLines, prevState = _a.state, wordFullyPrinted = _a.wordFullyPrinted, newLine = _a.newLine, charactersToPrint = _a.charactersToPrint;
    var _b = printMultiline({
        remainingLines: remainingLines,
        printedLines: printedLines,
        wordFullyPrinted: wordFullyPrinted,
        newLine: newLine,
        charactersToPrint: charactersToPrint,
    }), remainingLinesNext = _b.remainingLines, printedLinesNext = _b.printedLines, wordFullyPrintedNext = _b.wordFullyPrinted, newLineNext = _b.newLine;
    return {
        remainingLines: remainingLinesNext,
        printedLines: printedLinesNext,
        wordFullyPrinted: wordFullyPrintedNext,
        newLine: newLineNext,
        state: makeNewState({ prevState: prevState, printedLinesNext: printedLinesNext, newLine: newLine }),
    };
};
var createPrinterTask = function (nextPrint, printerSpeed) {
    return setTimeout(function () { return nextPrint(); }, printerSpeed);
};

var defaultState$1 = {
    state: [],
    remainingLines: null,
    printedLines: [],
    wordFullyPrinted: true,
    newLine: true,
};
function usePrinter(_a) {
    var _this = this;
    var printerSpeed = _a.printerSpeed, charactersPerTick = _a.charactersPerTick, afterPrintCallback = _a.afterPrintCallback;
    var _b = useState(false), isPrinting = _b[0], setIsPrinting = _b[1];
    var _c = useState(null), activeTimeout = _c[0], setActiveTimeout = _c[1];
    var _d = useState(defaultState$1), printerResponse = _d[0], setPrinterResponse = _d[1];
    var resolveRef = useRef(null);
    var clearTimeoutState = function () {
        if (activeTimeout) {
            clearTimeout(activeTimeout);
            setActiveTimeout(null);
        }
    };
    var clearResolver = function () {
        if (resolveRef.current) {
            resolveRef.current(true);
            resolveRef.current = null;
        }
    };
    var nextPrint = function () {
        var remainingLines = printerResponse.remainingLines, printedLines = printerResponse.printedLines, wordFullyPrinted = printerResponse.wordFullyPrinted, newLine = printerResponse.newLine, state = printerResponse.state;
        if (!remainingLines)
            return;
        var resp = printer({
            remainingLines: remainingLines,
            printedLines: newLine ? [] : printedLines,
            wordFullyPrinted: wordFullyPrinted,
            newLine: newLine,
            state: state,
            charactersToPrint: charactersPerTick,
        });
        setPrinterResponse(resp);
        setActiveTimeout(null);
    };
    var startPrint = function (line) { return __awaiter(_this, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            resp = printer({
                remainingLines: line,
                printedLines: [],
                state: printerResponse.state,
                wordFullyPrinted: true,
                newLine: true,
                charactersToPrint: charactersPerTick,
            });
            setIsPrinting(true);
            setPrinterResponse(resp);
            return [2 /*return*/, new Promise(function (resolve) {
                    resolveRef.current = resolve;
                })];
        });
    }); };
    var stopPrint = function () {
        setIsPrinting(false);
        clearTimeout();
        clearResolver();
    };
    var clear = function () {
        setPrinterResponse(defaultState$1);
    };
    useEffect(function () {
        var shouldStopPrint = isPrinting && !printerResponse.remainingLines;
        var shouldPrint = isPrinting && !activeTimeout;
        var shouldClearTimeout = !isPrinting && activeTimeout;
        if (shouldStopPrint) {
            stopPrint();
            afterPrintCallback();
        }
        else if (shouldPrint) {
            setActiveTimeout(createPrinterTask(nextPrint, printerSpeed));
            afterPrintCallback();
        }
        else if (shouldClearTimeout) {
            clearTimeoutState();
        }
        return function () { };
        // disabled due to inner structure: nextSlide only matters when activeTimeout or isLoading updated
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPrinting, activeTimeout]);
    useEffect(function () { return function () {
        clearTimeoutState();
        clearResolver();
    }; }, 
    // disabled due to inner structure: should be equal to "onBeforeUnmount"
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return {
        state: printerResponse.state,
        handlers: {
            startPrint: startPrint,
            clear: clear,
        },
    };
}

function useCommandScreen(_a) {
    var printerConfig = _a.printerConfig;
    var _b = usePrinter(printerConfig), state = _b.state, _c = _b.handlers, startPrint = _c.startPrint, clear = _c.clear;
    return {
        state: state,
        handlers: {
            print: startPrint,
            clear: clear,
        },
    };
}

var WordTypes;
(function (WordTypes) {
    WordTypes["ANCHOR"] = "ANCHOR";
    WordTypes["TEXT"] = "TEXT";
    WordTypes["BUTTON"] = "BUTTON";
    WordTypes["COMMAND"] = "COMMAND";
})(WordTypes || (WordTypes = {}));
var anchorWord = function (_a) {
    var characters = _a.characters, href = _a.href, onClick = _a.onClick, dataAttribute = _a.dataAttribute, className = _a.className, id = _a.id;
    return ({
        type: WordTypes.ANCHOR,
        characters: characters,
        href: href,
        onClick: onClick,
        dataAttribute: dataAttribute,
        id: id,
        className: className,
    });
};
var textWord = function (_a) {
    var characters = _a.characters, dataAttribute = _a.dataAttribute, className = _a.className, id = _a.id;
    return ({
        type: WordTypes.TEXT,
        characters: characters,
        dataAttribute: dataAttribute,
        id: id,
        className: className,
    });
};
var buttonWord = function (_a) {
    var characters = _a.characters, onClick = _a.onClick, dataAttribute = _a.dataAttribute, className = _a.className, id = _a.id;
    return ({
        type: WordTypes.BUTTON,
        characters: characters,
        onClick: onClick,
        dataAttribute: dataAttribute,
        id: id,
        className: className,
    });
};
var commandWord = function (_a) {
    var characters = _a.characters, prompt = _a.prompt, dataAttribute = _a.dataAttribute, className = _a.className, id = _a.id;
    return ({
        type: WordTypes.COMMAND,
        characters: characters,
        prompt: prompt,
        dataAttribute: dataAttribute,
        className: className,
        id: id,
    });
};
var LineTypes;
(function (LineTypes) {
    LineTypes["TEXT"] = "TEXT";
    LineTypes["COMMAND"] = "COMMAND";
})(LineTypes || (LineTypes = {}));
var commandLine = function (_a) {
    var words = _a.words, dataAttribute = _a.dataAttribute, className = _a.className, id = _a.id;
    return ({
        type: LineTypes.COMMAND,
        words: words,
        dataAttribute: dataAttribute,
        className: className,
        id: id,
    });
};
var textLine = function (_a) {
    var words = _a.words, dataAttribute = _a.dataAttribute, className = _a.className, id = _a.id;
    return ({
        type: LineTypes.TEXT,
        words: words,
        dataAttribute: dataAttribute,
        className: className,
        id: id,
    });
};

var PrinterEvents;
(function (PrinterEvents) {
    PrinterEvents["PRINT"] = "PRINT";
    PrinterEvents["CLEAR"] = "CLEAR";
})(PrinterEvents || (PrinterEvents = {}));
var defaultQueue$2 = [];
function usePrinterQueue() {
    var queue = useRef(defaultQueue$2).current;
    var _a = useState(__spreadArray([], defaultQueue$2, true)), queueState = _a[0], setQueueState = _a[1];
    var enqueue = function (event) {
        queue.push(event);
        setQueueState(__spreadArray([], queue, true));
    };
    var dequeue = function (afterDequeue) {
        queue.shift();
        setQueueState(__spreadArray([], queue, true));
        afterDequeue();
    };
    var nextEvent = function () { return queueState[0]; };
    var print = function (payload) {
        enqueue({
            type: PrinterEvents.PRINT,
            payload: payload,
        });
    };
    var clear = function () {
        enqueue({
            type: PrinterEvents.CLEAR,
        });
    };
    return {
        state: queueState,
        handlers: {
            print: print,
            clear: clear,
            dequeue: dequeue,
            nextEvent: nextEvent,
        },
    };
}

var TerminalEvents;
(function (TerminalEvents) {
    TerminalEvents["FOCUS"] = "FOCUS";
    TerminalEvents["LOCK"] = "LOCK";
    TerminalEvents["LOADING"] = "LOADING";
})(TerminalEvents || (TerminalEvents = {}));
var defaultQueue$1 = [];
function useTerminalQueue() {
    var queue = useRef(defaultQueue$1).current;
    var _a = useState(__spreadArray([], defaultQueue$1, true)), queueState = _a[0], setQueueState = _a[1];
    var enqueue = function (event) {
        queue.push(event);
        setQueueState(__spreadArray([], queue, true));
    };
    var dequeue = function (afterDequeue) {
        queue.shift();
        setQueueState(__spreadArray([], queue, true));
        afterDequeue();
    };
    var nextEvent = function () { return queueState[0]; };
    var focus = function () {
        enqueue({
            type: TerminalEvents.FOCUS,
        });
    };
    var lock = function (payload) {
        enqueue({
            type: TerminalEvents.LOCK,
            payload: payload,
        });
    };
    var loading = function (payload) {
        enqueue({
            type: TerminalEvents.LOADING,
            payload: payload,
        });
    };
    return {
        state: queueState,
        handlers: {
            focus: focus,
            lock: lock,
            loading: loading,
            dequeue: dequeue,
            nextEvent: nextEvent,
        },
    };
}

var defaultQueue = [];
function useEventQueue() {
    var queue = useRef(defaultQueue).current;
    var _a = useState(__spreadArray([], defaultQueue, true)), queueState = _a[0], setQueueState = _a[1];
    var enqueue = function (event) {
        queue.push(event);
        setQueueState(__spreadArray([], queue, true));
    };
    var dequeue = function (afterDequeue) {
        queue.shift();
        setQueueState(__spreadArray([], queue, true));
        afterDequeue();
    };
    var nextEvent = function () { return queueState[0]; };
    var print = function (payload) {
        enqueue({
            type: PrinterEvents.PRINT,
            payload: payload,
        });
    };
    var clear = function () {
        enqueue({
            type: PrinterEvents.CLEAR,
        });
    };
    var focus = function () {
        enqueue({
            type: TerminalEvents.FOCUS,
        });
    };
    var lock = function (payload) {
        enqueue({
            type: TerminalEvents.LOCK,
            payload: payload,
        });
    };
    var loading = function (payload) {
        enqueue({
            type: TerminalEvents.LOADING,
            payload: payload,
        });
    };
    return {
        state: queueState,
        api: { enqueue: enqueue, dequeue: dequeue, nextEvent: nextEvent },
        handlers: {
            print: print,
            clear: clear,
            focus: focus,
            lock: lock,
            loading: loading,
        },
    };
}

var printCommandLine = function (_a) {
    var characters = _a.characters, prompt = _a.prompt;
    return commandLine({ words: [commandWord({ characters: characters, prompt: prompt })] });
};
function useTerminalController(_a) {
    var _this = this;
    var _b = _a.terminalApp, inputLocked = _b.state.inputLocked, lockApp = _b.handlers.lock, _c = _a.input.handlers, setInputCursor = _c.setInputCursor, focusInput = _c.focus, _d = _a.commandScreen.handlers, printOnScreen = _d.print, clearScreen = _d.clear, _e = _a.commandLine, _f = _e.state, cursorPosition = _f.cursorPosition, inputValue = _f.inputValue, _g = _e.handlers, preventDefault = _g.preventDefault, addCharacter = _g.addCharacter, removeCharacter = _g.removeCharacter, moveCommandCursor = _g.moveCommandCursor, submitCommand = _g.submitCommand, provideCommandService = _g.provideCommandService, _h = _a.commandHistory.handlers, addCommand = _h.addCommand, nextCommand = _h.nextCommand, prevCommand = _h.prevCommand, _j = _a.loaderComponent, loaderLoading = _j.isLoading, _k = _j.handlers, startComponentLoading = _k.startLoading, endComponentLoading = _k.endLoading, _l = _a.interface, onCommand = _l.onCommand, prompt = _l.prompt, banner = _l.banner, enqueue = _l.queue.api.enqueue, focusOnMount = _a.focusOnMount;
    var _m = useState(false), lockedByLoader = _m[0], setLockedByLoader = _m[1];
    var focus = function () {
        focusInput();
    };
    var lock = function (locked) {
        var attemptUnlockLoader = loaderLoading && !locked;
        if (attemptUnlockLoader)
            return;
        lockApp(locked);
    };
    var clear = function () { return clearScreen(); };
    var print = function (line) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, printOnScreen(line)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var lockByLoader = function (lockState) {
        var needToLock = lockState && lockState !== inputLocked;
        var needToUnlock = !lockState && lockedByLoader;
        if (needToLock) {
            lockApp(true);
            setLockedByLoader(true);
        }
        else if (needToUnlock) {
            lockApp(false);
            setLockedByLoader(false);
        }
    };
    var loading = function (loadingState) {
        if (loadingState && !loaderLoading) {
            lockByLoader(true);
            startComponentLoading();
        }
        else if (!loadingState && loaderLoading) {
            endComponentLoading();
            lockByLoader(false);
        }
    };
    var handleInputChange = function (newInput) {
        if (!inputLocked)
            addCharacter(newInput);
    };
    var handleKeyboardEvent = function (key) {
        if (isMoveActions(key))
            moveCommandCursor(key);
        if (isRemoveActions(key))
            removeCharacter(key);
        if (isServiceActions(key))
            provideCommandService(key, { nextCommand: nextCommand, prevCommand: prevCommand });
        if (isSubmitActions(key)) {
            submitCommand();
            var characters = inputValue.trim();
            addCommand(characters);
            enqueue({ type: PrinterEvents.PRINT, payload: [printCommandLine({ characters: characters, prompt: prompt })] });
            onCommand(characters);
        }
    };
    var handleKeyboardDown = function (event) {
        var key = event.key;
        if (isPreventedActions(key))
            preventDefault(event);
        if (!inputLocked)
            handleKeyboardEvent(key);
    };
    useEffect(function () {
        setInputCursor(cursorPosition);
        // disabled due to inner structure: setInputCursor refers to ref input
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cursorPosition]);
    var loaded = useRef(false);
    useEffect(function () {
        if (banner && !loaded.current) {
            loaded.current = true;
            enqueue({ type: PrinterEvents.PRINT, payload: banner });
        }
        if (focusOnMount) {
            focusInput();
        }
        // disabled due to inner structure: hook should print banner on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        handlers: {
            focus: focus,
            lock: lock,
            clear: clear,
            print: print,
            handleInputChange: handleInputChange,
            handleKeyboardDown: handleKeyboardDown,
            loading: loading,
        },
    };
}

var defaultState = {
    inputLocked: false,
};
function useTerminalApp() {
    var _a = useState(defaultState.inputLocked), inputLocked = _a[0], setInputLocked = _a[1];
    var terminalRef = useRef(null);
    var setState = function (_a) {
        var newInputLocked = _a.inputLocked;
        if (inputLocked !== newInputLocked)
            setInputLocked(newInputLocked);
    };
    var lock = function (locked) { return setState({ inputLocked: locked }); };
    var scrollDown = function () {
        var current = terminalRef.current;
        if (current) {
            current.scrollTop = current.scrollHeight;
        }
    };
    return {
        state: {
            terminalRef: terminalRef,
            inputLocked: inputLocked,
        },
        handlers: {
            lock: lock,
            scrollDown: scrollDown,
        },
    };
}

function useSubscribePrinterQueue(_a) {
    var _this = this;
    var _b = _a.controller, clear = _b.clear, print = _b.print, _c = _a.queue, queueState = _c.state, _d = _c.handlers, dequeue = _d.dequeue, nextEvent = _d.nextEvent;
    var _e = useState(null), activeEvent = _e[0], setActiveEvent = _e[1];
    var nullifyActiveEvent = function () { return setActiveEvent(null); };
    var interpretEvent = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = event.type;
                    switch (_a) {
                        case PrinterEvents.CLEAR: return [3 /*break*/, 1];
                        case PrinterEvents.PRINT: return [3 /*break*/, 2];
                    }
                    return [3 /*break*/, 4];
                case 1:
                    clear();
                    dequeue(nullifyActiveEvent);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, print(event.payload)];
                case 3:
                    _b.sent();
                    dequeue(nullifyActiveEvent);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        var event = nextEvent();
        var isNew = activeEvent !== event;
        if (event && isNew) {
            setActiveEvent(event);
            interpretEvent(event);
        }
        // disabled due to inner structure: nextEvent and interpretEvent only matter when queue state updated, i.e. item enqueued or dequeued
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queueState, activeEvent]);
}

function useSubscribeTerminalQueue(_a) {
    var _b = _a.controller, focus = _b.focus, loading = _b.loading, lock = _b.lock, _c = _a.queue, queueState = _c.state, _d = _c.handlers, dequeue = _d.dequeue, nextEvent = _d.nextEvent;
    var _e = useState(null), activeEvent = _e[0], setActiveEvent = _e[1];
    var nullifyActiveEvent = function () { return setActiveEvent(null); };
    var interpretEvent = function (event) {
        switch (event.type) {
            case TerminalEvents.FOCUS:
                focus();
                dequeue(nullifyActiveEvent);
                break;
            case TerminalEvents.LOADING:
                loading(event.payload);
                dequeue(nullifyActiveEvent);
                break;
            case TerminalEvents.LOCK:
                lock(event.payload);
                dequeue(nullifyActiveEvent);
                break;
        }
    };
    useEffect(function () {
        var event = nextEvent();
        var isNew = activeEvent !== event;
        if (event && isNew) {
            setActiveEvent(event);
            interpretEvent(event);
        }
        // disabled due to inner structure: nextEvent and interpretEvent only matter when queue state updated, i.e. item enqueued or dequeued
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queueState, activeEvent]);
}

function useSubscribeEventQueue(_a) {
    var controller = _a.controller, _b = _a.queue, queueState = _b.state, _c = _b.api, dequeue = _c.dequeue, nextEvent = _c.nextEvent;
    var _d = useState(null), activeEvent = _d[0], setActiveEvent = _d[1];
    var nullifyActiveEvent = function () { return setActiveEvent(null); };
    var printerQueue = usePrinterQueue();
    var _e = printerQueue.handlers, printerPrint = _e.print, printerClear = _e.clear;
    useSubscribePrinterQueue({ queue: printerQueue, controller: controller });
    var terminalQueue = useTerminalQueue();
    var _f = terminalQueue.handlers, terminalFocus = _f.focus, terminalLoading = _f.loading, terminalLock = _f.lock;
    useSubscribeTerminalQueue({ queue: terminalQueue, controller: controller });
    var interpretEvent = function (event) {
        switch (event.type) {
            case TerminalEvents.FOCUS:
                terminalFocus();
                dequeue(nullifyActiveEvent);
                break;
            case TerminalEvents.LOADING:
                terminalLoading(event.payload);
                dequeue(nullifyActiveEvent);
                break;
            case TerminalEvents.LOCK:
                terminalLock(event.payload);
                dequeue(nullifyActiveEvent);
                break;
            case PrinterEvents.CLEAR:
                printerClear();
                dequeue(nullifyActiveEvent);
                break;
            case PrinterEvents.PRINT:
                printerPrint(event.payload);
                dequeue(nullifyActiveEvent);
                break;
        }
    };
    useEffect(function () {
        var event = nextEvent();
        var isNew = activeEvent !== event;
        if (event && isNew) {
            setActiveEvent(event);
            interpretEvent(event);
        }
        // disabled due to inner structure: nextEvent and interpretEvent only matter when queue state updated, i.e. item enqueued or dequeued
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queueState, activeEvent]);
}

var DEFAULT_SLIDE = '';
var DEFAULT_SLIDE_INDEX = -1;
var next = function (_a) {
    var slides = _a.slides, slideIndex = _a.slideIndex;
    var newIndex = slideIndex + 1;
    var slide = slides[newIndex];
    if (slide)
        return { slideIndex: newIndex, slide: slide };
    return { slideIndex: 0, slide: slides[0] || DEFAULT_SLIDE };
};
var createLoader = function (nextSlide, loaderSpeed) {
    return setTimeout(function () { return nextSlide(); }, loaderSpeed);
};

function useLoader(_a) {
    var slides = _a.slides, loaderSpeed = _a.loaderSpeed, onSetOuterState = _a.onSetOuterState;
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState(DEFAULT_SLIDE_INDEX), slideIndex = _c[0], setSlide = _c[1];
    var _d = useState(null), activeTimeout = _d[0], setActiveTimeout = _d[1];
    var clearTimeoutState = function () {
        if (activeTimeout) {
            clearTimeout(activeTimeout);
            setActiveTimeout(null);
        }
    };
    var nextSlide = function (setOuterState) { return function () {
        var _a = next({ slides: slides, slideIndex: slideIndex }), slide = _a.slide, newSlideIndex = _a.slideIndex;
        setSlide(newSlideIndex);
        setOuterState(slide);
        setActiveTimeout(null);
    }; };
    var startLoading = function () {
        setIsLoading(true);
        nextSlide(onSetOuterState)();
    };
    var endLoading = function () {
        setIsLoading(false);
        onSetOuterState(DEFAULT_SLIDE);
        setSlide(DEFAULT_SLIDE_INDEX);
    };
    useEffect(function () {
        var shouldStopLoading = !isLoading && activeTimeout;
        var shouldLoad = isLoading && !activeTimeout;
        if (shouldLoad) {
            setActiveTimeout(createLoader(nextSlide(onSetOuterState), loaderSpeed));
        }
        else if (shouldStopLoading) {
            clearTimeoutState();
        }
        return function () { };
        // disabled due to inner structure: nextSlide only matters when activeTimeout or isLoading updated
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, activeTimeout]);
    useEffect(function () { return function () { return clearTimeoutState(); }; }, 
    // disabled due to inner structure: should be equal to "onBeforeUnmount"
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return {
        isLoading: isLoading,
        handlers: {
            startLoading: startLoading,
            endLoading: endLoading,
        },
    };
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$7 = ".printer-line-module_commandLine__estqY {\n  padding: 1.4285714286rem 1.4285714286rem 1.4285714286rem 1.4285714286rem;\n}\n\n.printer-line-module_textLine__nz4P- {\n  padding: 0 1.4285714286rem 0 2.8571428571rem;\n}";
var classes$7 = {"commandLine":"printer-line-module_commandLine__estqY","textLine":"printer-line-module_textLine__nz4P-"};
styleInject(css_248z$7);

var checkLines = exhaustiveCheck('Unknown line type: ');
var PrinterLine = function PrinterLine(_a) {
    var line = _a.line, children = _a.children;
    var _b = line.className, className = _b === void 0 ? '' : _b, dataAttribute = line.dataAttribute, id = line.id;
    return (function () {
        switch (line.type) {
            case LineTypes.TEXT:
                return (React.createElement("div", { id: id, className: [classes$7.textLine, 'crt-text-line', className].join(' '), "data-crt-terminal": dataAttribute }, children));
            case LineTypes.COMMAND:
                return (React.createElement("div", { id: id, className: [classes$7.commandLine, 'crt-command-line', className].join(' '), "data-crt-terminal": dataAttribute }, children));
            default:
                return checkLines(line);
        }
    })();
};

var css_248z$6 = "@-webkit-keyframes character-module_blink-character__xvpwk {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@keyframes character-module_blink-character__xvpwk {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes character-module_scanner__eZs7v {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@keyframes character-module_scanner__eZs7v {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@-webkit-keyframes character-module_pulse-text__PBNwr {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@keyframes character-module_pulse-text__PBNwr {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@-webkit-keyframes character-module_shiver-screen__37A2O {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n@keyframes character-module_shiver-screen__37A2O {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n.character-module_character__MzT4w {\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n\n.character-module_characterSelected__axWlO {\n  color: #111010;\n  background-color: #d0fc7e;\n  -webkit-animation: character-module_blink-character__xvpwk 1s steps(1, end) infinite;\n          animation: character-module_blink-character__xvpwk 1s steps(1, end) infinite;\n}";
var classes$6 = {"character":"character-module_character__MzT4w","characterSelected":"character-module_characterSelected__axWlO","blink-character":"character-module_blink-character__xvpwk","scanner":"character-module_scanner__eZs7v","pulse-text":"character-module_pulse-text__PBNwr","shiver-screen":"character-module_shiver-screen__37A2O"};
styleInject(css_248z$6);

var Character = function Character(_a) {
    var children = _a.children, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    var selectedStyle = selected ? classes$6.characterSelected : '';
    return (React.createElement("span", { className: [classes$6.character, selectedStyle, className, 'crt-character'].join(' ') }, children));
};

var css_248z$5 = ".printer-word-module_commandWord__nSXjX {\n  display: inline-block;\n}\n\n.printer-word-module_textWord__akJYx {\n  display: inline-block;\n}\n\n.printer-word-module_buttonWord__iu6fj {\n  font-family: \"Courier New\", courier, monospace;\n  font-size: 1rem;\n  line-height: 1.5;\n  text-shadow: 0 0 1.1428571429rem #d0fc7e, 0 0 1.7142857143rem #d0fc7e;\n  color: #d0fc7e;\n  margin: 0;\n  padding: 0 5px;\n  display: inline-block;\n  background-color: transparent;\n  border: 1px solid #d0fc7e;\n  cursor: pointer;\n}\n.printer-word-module_buttonWord__iu6fj:hover {\n  color: #111010;\n  background-color: #d0fc7e;\n}\n\n.printer-word-module_anchorWord__dLnZB {\n  font-family: \"Courier New\", courier, monospace;\n  font-size: 1rem;\n  line-height: 1.5;\n  text-shadow: 0 0 1.1428571429rem #d0fc7e, 0 0 1.7142857143rem #d0fc7e;\n  color: #d0fc7e;\n  display: inline-block;\n}\n.printer-word-module_anchorWord__dLnZB:hover {\n  color: white;\n}";
var classes$5 = {"commandWord":"printer-word-module_commandWord__nSXjX","textWord":"printer-word-module_textWord__akJYx","buttonWord":"printer-word-module_buttonWord__iu6fj","anchorWord":"printer-word-module_anchorWord__dLnZB"};
styleInject(css_248z$5);

var checkWords = exhaustiveCheck('Unknown word type: ');
var PrinterWord = function PrinterWord(_a) {
    var word = _a.word, children = _a.children;
    var _b = word.className, className = _b === void 0 ? '' : _b, dataAttribute = word.dataAttribute, id = word.id;
    return (function () {
        switch (word.type) {
            case WordTypes.TEXT:
                return (React.createElement("span", { id: id, className: [classes$5.textWord, 'crt-text-word', className].join(' '), "data-crt-terminal": dataAttribute },
                    React.createElement(Character, null, children)));
            case WordTypes.ANCHOR:
                return (React.createElement("a", { id: id, className: [classes$5.anchorWord, 'crt-anchor-word', className].join(' '), "data-crt-terminal": dataAttribute, href: word.href, onClick: word.onClick },
                    React.createElement(Character, null, children)));
            case WordTypes.BUTTON:
                return (React.createElement("button", { type: "button", id: id, className: [classes$5.buttonWord, 'crt-button-word', className].join(' '), "data-crt-terminal": dataAttribute, onClick: word.onClick },
                    React.createElement(Character, null, children)));
            case WordTypes.COMMAND:
                return (React.createElement("span", { id: id, className: [classes$5.commandWord, 'crt-command-word', className].join(' '), "data-crt-terminal": dataAttribute },
                    React.createElement(Character, null, word.prompt),
                    React.createElement(Character, null, children)));
            default:
                return checkWords(word);
        }
    })();
};

var TerminalScreen = memo(function (_a) {
    var state = _a.state;
    return (React.createElement("div", { className: "crt-screen" }, state.map(function (line, lineIndex) { return (React.createElement(PrinterLine, { line: line, key: lineIndex }, line.words.map(function (word, wordIndex) { return (React.createElement(PrinterWord, { word: word, key: wordIndex }, word.characters)); }))); })));
});

var css_248z$4 = "@-webkit-keyframes overlay-module_blink-character__Ye2qL {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@keyframes overlay-module_blink-character__Ye2qL {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes overlay-module_scanner__jkhjA {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@keyframes overlay-module_scanner__jkhjA {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@-webkit-keyframes overlay-module_pulse-text__KyZ3A {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@keyframes overlay-module_pulse-text__KyZ3A {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@-webkit-keyframes overlay-module_shiver-screen__sjqEZ {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n@keyframes overlay-module_shiver-screen__sjqEZ {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n.overlay-module_overlay__zbWt1 {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.overlay-module_scanner__jkhjA {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 1.7142857143rem;\n  opacity: 0.05;\n  background: linear-gradient(180deg, transparent 0, #fffcfc 85%, #d0fc7e 0, transparent);\n  -webkit-animation: overlay-module_scanner__jkhjA 8s linear infinite forwards;\n          animation: overlay-module_scanner__jkhjA 8s linear infinite forwards;\n}\n\n.overlay-module_pixels__m5X6w {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.21) 0), linear-gradient(90deg, rgba(255, 0, 0, 0.055), rgba(0, 255, 0, 0.03), rgba(0, 0, 255, 0.055));\n  background-position-y: 0.0714285714rem;\n  background-size: 100% 0.2142857143rem, 0.2857142857rem 100%;\n}";
var classes$4 = {"overlay":"overlay-module_overlay__zbWt1","scanner":"overlay-module_scanner__jkhjA","pixels":"overlay-module_pixels__m5X6w","blink-character":"overlay-module_blink-character__Ye2qL","pulse-text":"overlay-module_pulse-text__KyZ3A","shiver-screen":"overlay-module_shiver-screen__sjqEZ"};
styleInject(css_248z$4);

var Overlay = function Overlay(_a) {
    var scanner = _a.scanner, pixels = _a.pixels;
    return (React.createElement("div", { className: [classes$4.overlay, 'crt-overlay'].join(' ') },
        scanner && React.createElement("div", { className: [classes$4.scanner, 'crt-scanner'].join(' ') }),
        pixels && React.createElement("div", { className: [classes$4.pixels, 'crt-pixels'].join(' ') })));
};

var css_248z$3 = "@-webkit-keyframes text-effects-module_blink-character__CrwdV {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@keyframes text-effects-module_blink-character__CrwdV {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes text-effects-module_scanner__EXIFB {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@keyframes text-effects-module_scanner__EXIFB {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@-webkit-keyframes text-effects-module_pulse-text__AVts8 {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@keyframes text-effects-module_pulse-text__AVts8 {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@-webkit-keyframes text-effects-module_shiver-screen__ysQ0c {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n@keyframes text-effects-module_shiver-screen__ysQ0c {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n.text-effects-module_textEffects__OWNjV {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: text-effects-module_pulse-text__AVts8 5s linear infinite;\n          animation: text-effects-module_pulse-text__AVts8 5s linear infinite;\n}";
var classes$3 = {"textEffects":"text-effects-module_textEffects__OWNjV","pulse-text":"text-effects-module_pulse-text__AVts8","blink-character":"text-effects-module_blink-character__CrwdV","scanner":"text-effects-module_scanner__EXIFB","shiver-screen":"text-effects-module_shiver-screen__ysQ0c"};
styleInject(css_248z$3);

var TextEffects = function TextEffects(_a) {
    var enabled = _a.enabled, children = _a.children;
    return (React.createElement(React.Fragment, null, enabled ? (React.createElement("div", { className: [classes$3.textEffects, 'crt-text-effects'].join(' ') }, children)) : (children)));
};

var css_248z$2 = "@-webkit-keyframes screen-effects-module_blink-character__CftBz {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@keyframes screen-effects-module_blink-character__CftBz {\n  50% {\n    color: #d0fc7e;\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes screen-effects-module_scanner__N91BH {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@keyframes screen-effects-module_scanner__N91BH {\n  0% {\n    top: 0%;\n  }\n  50% {\n    top: 100%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n@-webkit-keyframes screen-effects-module_pulse-text__awrsE {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@keyframes screen-effects-module_pulse-text__awrsE {\n  50% {\n    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;\n    color: #c6fc7e;\n  }\n}\n@-webkit-keyframes screen-effects-module_shiver-screen__xieUK {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n@keyframes screen-effects-module_shiver-screen__xieUK {\n  0% {\n    transform: skewX(0deg);\n  }\n  4% {\n    transform: skewX(0.7deg) scale(1.0001);\n  }\n  8% {\n    transform: skewX(0.2deg) skewY(-0.1deg);\n  }\n  16% {\n    transform: skewX(0.2deg);\n  }\n  50% {\n    transform: skewX(0.2deg);\n  }\n}\n.screen-effects-module_screenEffects__bNTzl {\n  width: 100%;\n  height: 100%;\n  -webkit-animation: screen-effects-module_shiver-screen__xieUK 10s linear infinite;\n          animation: screen-effects-module_shiver-screen__xieUK 10s linear infinite;\n}";
var classes$2 = {"screenEffects":"screen-effects-module_screenEffects__bNTzl","shiver-screen":"screen-effects-module_shiver-screen__xieUK","blink-character":"screen-effects-module_blink-character__CftBz","scanner":"screen-effects-module_scanner__N91BH","pulse-text":"screen-effects-module_pulse-text__awrsE"};
styleInject(css_248z$2);

var ScreenEffects = function ScreenEffects(_a) {
    var enabled = _a.enabled, children = _a.children;
    return (React.createElement(React.Fragment, null, enabled ? (React.createElement("div", { className: [classes$2.screenEffects, 'crt-screen-effects'].join(' ') }, children)) : (children)));
};

var InputString = memo(function (_a) {
    var cursorPosition = _a.cursorPosition, renderValue = _a.renderValue;
    return (React.createElement(React.Fragment, null, renderValue.map(function (character, key) { return (React.createElement(Character, { selected: cursorPosition === key, key: key }, character)); })));
});

var css_248z$1 = ".command-line-module_commandLine__lnMf6 {\n  padding: 1.4285714286rem 1.4285714286rem 1.4285714286rem 1.4285714286rem;\n}\n\n.command-line-module_inputWrap__OpY8r {\n  display: inline-block;\n}\n\n.command-line-module_input__ZPwEm {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.command-line-module_inputString__J1jZF {\n  display: inline-block;\n  overflow: visible;\n  white-space: normal;\n  word-break: break-all;\n}";
var classes$1 = {"commandLine":"command-line-module_commandLine__lnMf6","inputWrap":"command-line-module_inputWrap__OpY8r","input":"command-line-module_input__ZPwEm","inputString":"command-line-module_inputString__J1jZF"};
styleInject(css_248z$1);

var CommandLine = React.forwardRef(function (_a, inputElement) {
    var _b = _a.state, cursorPosition = _b.cursorPosition, renderValue = _b.renderValue, inputValue = _b.inputValue, handleKeyboardDown = _a.handleKeyboardDown, handleInputChange = _a.handleInputChange, prompt = _a.prompt, cursorSymbol = _a.cursorSymbol;
    var handleInput = function (event) {
        var value = event.currentTarget.value;
        handleInputChange(value);
    };
    var handleKeyDown = function (event) {
        handleKeyboardDown(event);
    };
    var lastSelected = cursorPosition === renderValue.length;
    return (React.createElement("div", { className: [classes$1.commandLine, 'crt-command-line'].join(' ') },
        React.createElement("span", { className: "crt-command-line__prompt" }, prompt),
        React.createElement("div", { className: [classes$1.inputWrap, 'crt-command-line__input-wrapper'].join(' ') },
            React.createElement("input", { className: [classes$1.input, 'crt-command-line__input'].join(' '), id: "crt-command-line-input", ref: inputElement, value: inputValue, onInput: handleInput, onKeyDown: handleKeyDown, type: "text" }),
            React.createElement("div", { className: [classes$1.inputString, 'crt-command-line__input-string'].join(' ') },
                React.createElement(InputString, { renderValue: renderValue, cursorPosition: cursorPosition }),
                lastSelected && (React.createElement(Character, { className: "crt-cursor-symbol", selected: true }, cursorSymbol))))));
});

var css_248z = ".terminal-module_terminal__4qfYI {\n  font-family: \"Courier New\", courier, monospace;\n  font-size: 1rem;\n  line-height: 1.5;\n  text-shadow: 0 0 1.1428571429rem #d0fc7e, 0 0 1.7142857143rem #d0fc7e;\n  color: #d0fc7e;\n  position: relative;\n  margin: 0;\n  padding: 1.1428571429rem 0.5714285714rem;\n  display: block;\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  background: radial-gradient(50% 50% at 50% 50%, #354228 0, #0f140a 100%);\n  border: 1.1428571429rem solid #111010;\n  border-radius: 3.4285714286rem;\n  box-shadow: 0 0 2.8571428571rem #252925, inset 0 0 2rem 1.4285714286rem #000;\n  -webkit-font-smoothing: antialiased;\n}\n.terminal-module_terminal__4qfYI ::-moz-selection {\n  color: #111010;\n  background: #d0fc7e;\n  -moz-appearance: none;\n       appearance: none;\n}\n.terminal-module_terminal__4qfYI ::selection {\n  color: #111010;\n  background: #d0fc7e;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.terminal-module_terminal__4qfYI * {\n  box-sizing: border-box;\n}\n\n.terminal-module_overflowContainer__p2duW {\n  position: relative;\n  overflow-y: auto;\n  width: 100%;\n  max-height: 100%;\n  border-radius: 1.2857142857rem;\n}\n.terminal-module_overflowContainer__p2duW::-webkit-scrollbar {\n  width: 0.3571428571rem;\n  height: 0.3571428571rem;\n}\n.terminal-module_overflowContainer__p2duW::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n.terminal-module_overflowContainer__p2duW::-webkit-scrollbar-thumb {\n  background: #d0fc7e;\n  border: 0 none #fffcfc;\n  border-radius: 0.2857142857rem;\n}";
var classes = {"terminal":"terminal-module_terminal__4qfYI","overflowContainer":"terminal-module_overflowContainer__p2duW"};
styleInject(css_248z);

var Terminal = function Terminal(_a) {
    var onCommand = _a.onCommand, queue = _a.queue, banner = _a.banner, _b = _a.prompt, prompt = _b === void 0 ? '>\xa0' : _b, _c = _a.cursorSymbol, cursorSymbol = _c === void 0 ? '\xa0' : _c, _d = _a.maxHistoryCommands, maxHistoryCommands = _d === void 0 ? 10 : _d, _e = _a.loader, _f = _e === void 0 ? {} : _e, _g = _f.slides, slides = _g === void 0 ? ['.', '..', '...'] : _g, _h = _f.loaderSpeed, loaderSpeed = _h === void 0 ? 1000 : _h, _j = _a.printer, _k = _j === void 0 ? {} : _j, _l = _k.printerSpeed, printerSpeed = _l === void 0 ? 20 : _l, _m = _k.charactersPerTick, charactersPerTick = _m === void 0 ? 5 : _m, _o = _a.effects, _p = _o === void 0 ? {} : _o, _q = _p.scanner, scanner = _q === void 0 ? true : _q, _r = _p.pixels, pixels = _r === void 0 ? true : _r, _s = _p.screenEffects, screenEffects = _s === void 0 ? true : _s, _t = _p.textEffects, textEffects = _t === void 0 ? true : _t, _u = _a.focusOnMount, focusOnMount = _u === void 0 ? true : _u;
    var terminalApp = useTerminalApp();
    var terminalRef = terminalApp.state.terminalRef, scrollDown = terminalApp.handlers.scrollDown;
    var _v = useCommandScreen({
        printerConfig: { printerSpeed: printerSpeed, charactersPerTick: charactersPerTick, afterPrintCallback: scrollDown },
    }), state = _v.state, screenHandlers = _v.handlers;
    var commandLine = useCommandLine();
    var _w = useCommandLineInput(), inputElementRef = _w.state.inputElementRef, inputHandlers = _w.handlers;
    var commandHistory = useCommandHistory({ maxHistoryCommands: maxHistoryCommands });
    var loaderComponent = useLoader({
        slides: slides,
        loaderSpeed: loaderSpeed,
        onSetOuterState: commandLine.handlers.setInput,
    });
    var controllerHandlers = useTerminalController({
        input: {
            handlers: inputHandlers,
        },
        terminalApp: terminalApp,
        commandHistory: commandHistory,
        commandLine: commandLine,
        commandScreen: { handlers: screenHandlers },
        loaderComponent: loaderComponent,
        interface: { banner: banner, prompt: prompt, onCommand: onCommand, queue: queue },
        focusOnMount: focusOnMount,
    }).handlers;
    var handleKeyboardDown = controllerHandlers.handleKeyboardDown, handleInputChange = controllerHandlers.handleInputChange;
    useSubscribeEventQueue({ queue: queue, controller: controllerHandlers });
    return (React.createElement("label", { className: [classes.terminal, 'crt-terminal'].join(' '), htmlFor: "crt-command-line-input" },
        React.createElement(Overlay, { scanner: scanner, pixels: pixels }),
        React.createElement(ScreenEffects, { enabled: screenEffects },
            React.createElement("div", { ref: terminalRef, className: [classes.overflowContainer, 'crt-terminal__overflow-container'].join(' ') },
                React.createElement(TextEffects, { enabled: textEffects },
                    React.createElement("div", { className: "crt-terminal__screen" },
                        React.createElement(TerminalScreen, { state: state })),
                    React.createElement("div", { className: "crt-terminal__command-line" },
                        React.createElement(CommandLine, { ref: inputElementRef, prompt: prompt, cursorSymbol: cursorSymbol, state: commandLine.state, handleKeyboardDown: handleKeyboardDown, handleInputChange: handleInputChange })))))));
};

export { LineTypes, PrinterEvents, Terminal, TerminalEvents, WordTypes, anchorWord, buttonWord, commandLine, commandWord, textLine, textWord, useEventQueue };
