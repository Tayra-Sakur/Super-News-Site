/**
 * @jscomp_warning_level *
 * @js_output_file script.slim.min.js
 * @compilation_level ADVANCED
 * @strict_mode_input false
 * @externs https://code.jquery.com/jquery-3.7.0.js
 */

/**
 * @fileoverview script.js This JS file is writer of this page
 * @author Taira Sakurai <tayra_sakurai@icloud.com>
 * @copyright Copyright (c) 2023 Taira Sakurai
 * @version pre1.0.0
 * @license Copyright (c)2023 Taira Sakurai
 * This file is released under GNU General Public License
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use strict";

/**
 * @typedef {function((string|Element|Array<Element>|jQueryStatic|null)=): jQueryStatic}
 */
var jQueryStatic;

/**
 * remove Event handler
 * @type {void}
 * @nosideeffect
 */
onerror = void(false);

/**
 * Bug trackker
 * @type {function(string,string,number,number,Object)}
 * @nosideeffect
 */
onerror =
    function(
        message,
        url,
        line,
        column,
        errObj
    ) {
        /**
         * Message Text
         * @type {string}
         */
        var errMsg =
            message
                +
            '(\n\tfile: '
                +
            url
                +
            '\n\tline: '
                +
            line
                +
            '\n\tcolumn: '
                +
            column
                +
            '\n)'
            ;
        /**
         * @type {function(?): void}
         */
        alert(errMsg);
        console.error(errMsg);
    }
;

/**
 * @public {jQueryStatic}
 * @const
 */
const [jQuery,$] =
    [
        window.jQuery,
        window.$
    ];

/**
 * @type {Array<{
 *                  supertitle: string,
 *                  heading2: string?,
 *                  heading3: string?,
 *                  heading4: string?,
 *                  heading5: string?,
 *                  summary: string,
 *                  content: Array<string>,
 *                  author: string,
 *                  contact: window.URL?,
 *                  date: Date
 *              }>}
 * @const
 */
const articles =
    [
        {
            supertitle: 'Mickey Momma Got ARRESTED',
            heading2: 'Nobody Didn’t Smile!',
            summary: 'On 12 May, Mickey Momma got arrested.',
            content:
                [
                    'Mickey Momma has disturbed Tigger for many years.'
                ],
            author: 'Taira Sakurai',
            contact:
                new URL(
                    'mailto:tayra_sakurai@icloud.com'
                ),
            date: new Date(1987,2,31)
        }
    ];

/**
 * Article writing function
 * @param {number} index
 * @param {Object} element
 * @this {Array<Object>}
 * @return {void}
 */
function articleWrite(index, element){
    console.log(element);
    /**
     * @type {jQueryStatic}
     */
    var SuperJq =
        jQuery('<section></section>');
    /**
     * @type {jQueryStatic}
     */
    var supertitleh =
        jQuery('<hgroup></hgroup>');
    /**
     * @type {string}
     */
    var superh =
        element.supertitle;
    /**
     * @type {jQueryStatic}
     */
    var newHead = jQuery('<h1></h1>');
    /**
     * @return {void}
     */
    newHead
        .append(superh);
    /**
     * @return {void}
     */
    supertitleh.append(newHead);
    /**
     * @type {Array<string?>}
     */
    var headings
        =
            [
                element.heading2,
                element.heading3,
                element.heading4,
                element.heading5
            ];
    /**
     * heading level counter
     * @type {number}
     */
    var headLevel = 1;
    for ( let commonH of headings ){
        ++headLevel;
        if( commonH == null ){
            break;
        }
        /**
         * @return {void}
         */
        supertitleh
            .append(
                `<h${headLevel}>${commonH}</h${headLevel}>`
            );
    }
    /**
     * add Summary
     * @type {function(string): void}
     */
    supertitleh
        .append(
            '<p>'
                +
            element.summary
                +
            '</p>'
        );
    /**
     * Set heading
     * @type {function}
     */
    SuperJq.prepend(supertitleh);
    /**
     * Article
     * @type {jQueryStatic}
     */
    var contents1 =
        jQuery('<article></article>');
    /**
     * @type {?string}
     */
    let ctr;
    for ( ctr of element.content ){
        ctr =
            '<p>'
                +
            ctr
                +
            '</p>';
        /**
         * @type {function(string): void}
         */
        contents1
            .append(ctr);
    }
    /**
     * @return {void}
     */
    SuperJq.append(contents1);
    /**
     * Name of writer
     * @type {string}
     */
    var writer = element.author;
    /**
     * Address Tag
     * @type {jQueryStatic}
     */
    var addressData =
        jQuery('<address></address>');
    /**
     * Hyperlink to contact
     * @type {jQueryStatic}
     */
    var contacter =
        jQuery('<a></a>');
    /**
     * Contact Link
     * @type {string}
     */
    var contactLink =
        element.contact.href;
    /**
     * set href
     * @return {void}
     */
    contacter
        .attr(
            'href',
            contactLink
        );
    /**
     * @return {jQueryStatic}
     */
    contacter.text(contactLink);
    /**
     * Show the Name
     * @return {jQueryStatic}
     */
    addressData.text(writer);
    /**
     * Show Contact Link
     * @return {void}
     */
    addressData.append(contacter);
    /**
     * Add contact data
     * @return {void}
     */
    SuperJq.append(addressData);
    /**
     * Tasks to do are...
     * Add a <date> tag included by a <div>
     * Add a article
     */
    /**
     * div includes date tag
     * @type {jQueryStatic}
     */
    var dateDiv =
        jQuery('<div></div>');
    /**
     * time tag
     * @type {jQueryStatic}
     */
    var date =
        jQuery('<time></time>');
    /**
     * set the time in ISO format
     * @return {jQueryStatic}
     */
    date
        .attr(
                 'datetime',
                 element
                     .date
                         .toISOString()
        )
    ;
    /**
     * set the text of date
     * @return {jQueryStatic}
     */
    date
        .text(
            element
                .date
                    .toLocaleDateString(
                        'en-UK',
                        {
                            dateStyle:
                                'full'
                        }
                    )
        )
    ;
    /**
     * add time tag
     * @return {void}
     */
    dateDiv.append(date);
    /**
     * add time div
     * @return {void}
     */
    SuperJq.append(dateDiv);
    /**
     * add article
     * @return {void}
     */
    jQuery('div#content')
        .append(SuperJq);
    /**
     * give id
     * @type {string}
     */
    var automaticId = `jQueryId-${index}`;
    /**
     * @return {jQueryStatic}
     */
    SuperJq.attr('id', automaticId);
    /**
     * add index
     * @return {void}
     */
    $('ol#index1')
        .append(
            `<li><a href="#${automaticId}" title="${element.summary}">${element.supertitle}</a></li>`
        )
    ;
}

/**
 * Tasks to do are...
 * make a function that start the action
 * make a function which makes footer data
 */
/**
 * start function
 * making articles
 * @param {Event} event
 * @return {jQueryStatic}
 */
function startSetup ( event ) {
    /**
     * @return {Array<Object>}
     */
    $.each(articles, articleWrite);
    /**
     * Footer
     * @const {jQueryStatic}
     */
    const footerJQ =
        jQuery('<footer></footer>');
    /**
     * adding license notice
     * @const {jQueryStatic}
     */
    const licenseDiv =
        jQuery('<div></div>');
    /**
     * adding the content of div
     * @return {void}
     */
    licenseDiv
        .prepend(
            '<h2>License Notice</h2><p>This project is released under the GNU General Public License(<abbr>GPL</abbr>).</p>'
        )
    ;
    /**
     * figure for license
     * @const {jQueryStatic}
     */
    const licenseFigure =
        jQuery('<figure></figure>');
    /**
     * blockquote for license
     * @const {jQueryStatic}
     */
    const licenseBlockquote =
        jQuery('<blockquote cite="https://www.gnu.org/licenses/gpl.html"></blockquote>');
    /**
     * License Notice
     * @const {string}
     */
    const licenseNotice =
`<p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>
<p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.</p>
<p>You should have received a copy of the GNU General Public License along with this program. If not, see <a href="https://www.gnu.org/licenses/">&lt;https://www.gnu.org/licenses/&gt;</a>.</p>`;
    /**
     * text in blockquote
     * @return {void}
     */
    licenseBlockquote
        .prepend(licenseNotice);
    /**
     * same as above
     * @return {void}
     */
    licenseFigure
        .prepend(licenseBlockquote);
    /**
     * add License Notice
     * @return {void}
     */
    licenseDiv
        .append(licenseFigure);
    /**
     * add these to footer
     * @return {void}
     */
    footerJQ
        .prepend(licenseDiv);
    /**
     * put footer
     * @return {void}
     */
    $('main').after(footerJQ);
    return jQuery;
}

$(startSetup);
