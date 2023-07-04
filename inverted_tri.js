function printInvertedTri()
{
    let gap_count=0;
    for (let line_count=0; line_count<22; line_count++)
    {
        let zero_print_length= 21-gap_count;
        printRow(zero_print_length, gap_count);
        console.log(" ");
        line_count<=9 ? gap_count++ : gap_count --;
    }
}


function printRow(zero_print_length, gap_count) {
    for (let tri_line_length = 0; tri_line_length < zero_print_length; tri_line_length++) 
    {
        (tri_line_length < gap_count) ? process.stdout.write(" ") : process.stdout.write("0");
    }
}

printInvertedTri()
