function bibtex_sorter(a, b) { return a.entryTags.year > b.entryTags.year ? -1 : b.entryTags.year > a.entryTags.year ? 1 : a.entryTags.title > b.entryTags.title ? -1 : 1 }
var parsed_journal_bibtex = [],
    cit_idx;
for (cit_idx in journal_bibtex) parsed_journal_bibtex.push(bibtexParse.toJSON(journal_bibtex[cit_idx])[0]);
var parsed_conference_bibtex = [];
for (cit_idx in conference_bibtex) parsed_conference_bibtex.push(bibtexParse.toJSON(conference_bibtex[cit_idx])[0]);
parsed_journal_bibtex.sort(bibtex_sorter);
parsed_conference_bibtex.sort(bibtex_sorter);
var paper_template = "",
    j_idx;
for (j_idx in parsed_journal_bibtex) {
    var book_journal_title;
    parsed_journal_bibtex[j_idx].entryTags.booktitle ? book_journal_title = parsed_journal_bibtex[j_idx].entryTags.booktitle : book_journal_title = parsed_journal_bibtex[j_idx].entryTags.journal;
    paper_template += '<div class="span12">\n\t\t\t\t\t<h2>\n                    <p style="font-size:18px;text-align: justify; line-height: normal;">';
    paper_template += parsed_journal_bibtex[j_idx].entryTags.title + "</br>";
    paper_template += '<span style="font-size:13px;">' + parsed_journal_bibtex[j_idx].entryTags.author +
        "</br>";
    paper_template += book_journal_title + ", " + parsed_journal_bibtex[j_idx].entryTags.year;
    paper_template += "</span></p></h2></div>"
}
$("#journal-papers").append(paper_template);
paper_template = "";
for (j_idx in parsed_conference_bibtex) paper_template += '<div class="span12">\n\t\t\t\t\t<h2>\n                    <p style="font-size:18px;text-align: justify; line-height: normal;">', paper_template += parsed_conference_bibtex[j_idx].entryTags.title + "</br>", paper_template += '<span style="font-size:13px;">' + parsed_conference_bibtex[j_idx].entryTags.author + "</br>", paper_template += parsed_conference_bibtex[j_idx].entryTags.booktitle + ", " + parsed_conference_bibtex[j_idx].entryTags.year, paper_template += "</span></p></h2></div>";
$("#conference-papers").append(paper_template);