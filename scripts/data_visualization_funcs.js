
/**
 * Draws a pie chart for question 1.
 * 
 * @param {Number} online_ad    number of people who chose "Online advertisement"
 * @param {Number} social_media number of people who chose "Social media"
 * @param {Number} word_mouth   number of people who chose "Word of mouth"
 * @param {Number} other        number of people who chose "Other"
 */
function draw_q1(online_ad, social_media, word_mouth, other) {
    const answers = ['Online advertisement', 'Social media', 'Word of mouth', 'Other'];
    const counts = [online_ad, social_media, word_mouth, other];
    const colors = ['darkcyan', 'goldenrod', 'brown', 'darkolivegreen', 'sandybrown'];
    const canvas = document.getElementById('q1');

    new Chart(canvas, {
        type: 'pie',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }]
        },
        options: {
            plugins: {
                legend: { display: true, }
            }
        },
    });
}

/**
 * Draws a bar chart for question 2.
 * 
 * @param {Number} very_satisfied       number of people who chose "Very satisfied"
 * @param {Number} satisfied            number of people who chose "Satisfied"
 * @param {Number} neutral              number of people who chose "Neutral"
 * @param {Number} dissatisfied         number of people who chose "Dissatisfied"
 * @param {Number} very_dissatisfied    number of people who chose "Very dissatisfied"
 */
function draw_q2(very_satisfied, satisfied, neutral, dissatisfied, very_dissatisfied) {
    const answers = ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied'];
    const counts = [very_satisfied, satisfied, neutral, dissatisfied, very_dissatisfied];
    const colors = ['aqua', 'blue', 'yellowgreen', 'orange', 'crimson'];
    const canvas = document.getElementById('q2');

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }]
        },
        options: {
            plugins: {
                legend: { display: false, }
            }
        },
    });
}

/**
 * Draws a bar chart for question 3.
 * 
 * @param {Number} yes_count    number of people who chose "Yes"
 * @param {Number} no_count     number of people who chose "No"
 */
function draw_q3(yes_count, no_count) {
    const answers = ['Yes', 'No'];
    const counts = [yes_count, no_count];
    const colors = ['green', 'red'];
    const canvas = document.getElementById('q3');

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }]
        },
        options: {
            plugins: {
                legend: { display: false, }
            }
        },
    });
}

/**
 * Draws a doughnut chart for question 4.
 * 
 * @param {Number} presentation number of people who chose "Keynote speakers/presentations"
 * @param {Number} networking   number of people who chose "Networking opportunities"
 * @param {Number} activities   number of people who chose "Activities and games"
 * @param {Number} other        number of people who chose "Other"
 */
function draw_q4(presentation, networking, activities, other) {
    const answers = ['Keynote speakers/presentations', 'Networking opportunities', 'Activities and games', 'Other'];
    const counts = [presentation, networking, activities, other];
    const colors = ['aquamarine', 'coral', 'forestgreen', 'firebrick'];
    const canvas = document.getElementById('q4');

    new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }]
        },
        options: {
            plugins: {
                legend: { display: true, }
            }
        },
    });
}

/**
 * Draws a bar chart for question 5.
 * 
 * @param {Number} yes_count    number of people who chose "Yes"
 * @param {Number} no_count     number of people who chose "No"
 */
function draw_q5(yes_count, no_count) {
    const answers = ['Yes', 'No'];
    const counts = [yes_count, no_count];
    const colors = ['tomato', 'chartreuse'];
    const canvas = document.getElementById('q5');

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }]
        },
        options: {
            plugins: {
                legend: { display: false, }
            }
        },
    });
}

/**
 * Draws a pie chart for question 6.
 * 
 * @param {Number} online_ad    number of people who chose "Very likely"
 * @param {Number} social_media number of people who chose "Likely"
 * @param {Number} word_mouth   number of people who chose "Neutral"
 * @param {Number} other        number of people who chose "Very unlikely"
 */
function draw_q6(online_ad, social_media, word_mouth, other) {
    const answers = ['Very likely', 'Likely', 'Neutral', 'Very unlikely'];
    const counts = [online_ad, social_media, word_mouth, other];
    const colors = ['cornflowerblue', 'darkslategrey', 'darkred', 'darkkhaki'];
    const canvas = document.getElementById('q6');

    new Chart(canvas, {
        type: 'pie',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }],
        },
        options: {
            plugins: {
                legend: { display: true, }
            }
        },
    });
}

/**
 * Draws a bar chart for question 7.
 * 
 * @param {Number} high_recommend    number of people who chose "Highly recommend it"
 * @param {Number} recommend        number of people who chose "Recommend it"
 * @param {Number} not_recommend    number of people who chose "Wouldn't recommend it"
 */
function draw_q7(high_recommend, recommend, not_recommend) {
    const answers = ['Highly recommend it', 'Recommend it', 'Wouldn\'t recommend it'];
    const counts = [high_recommend, recommend, not_recommend];
    const colors = ['midnightblue', 'chartreuse', 'indianred'];
    const canvas = document.getElementById('q7');

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: answers,
            datasets: [{
                backgroundColor: colors,
                data: counts,
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
            }
        },
    });
}
