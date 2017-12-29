/*

Implement a function for solving the “Hanoi Tower” puzzle.

usage: hanoi(<num>)
where <num> is the number of disks on rod 1. The goal is to move the disks to rod 2.

Expected output for hanoi(3):
1 -> 2
2 -> 3
1 -> 3
3 -> 2
1 -> 1
2 -> 2
1 -> 2


 */

function hanoi(num) {
    hanoiTower(num, 1, 2);
}

function hanoiTower(num, src, dest) {
    if ( num === 0 ) return;
    let middle = ( 6 - src - dest) ;
    hanoiTower(num - 1, src, middle);
    console.log ('Disk ' + num + ' -> ' + 'Rod ' +  dest );
    hanoiTower(num - 1, middle, dest);

}

hanoi(3);
