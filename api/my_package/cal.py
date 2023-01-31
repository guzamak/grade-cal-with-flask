def grade (sc):
    grade = []
    for s in sc:
        s = int(s)
        if s >= 80: g = 4
        elif s >= 75: g = 3.5
        elif s >= 70: g = 3
        elif s >= 65: g = 2.5
        elif s >= 60: g = 2
        elif s >= 55: g = 1.5
        elif s >= 50: g = 1
        else: g = 0
        grade.append(g)
    return grade


def allgrade (grade,credit,num):
    allgup=0
    allgdown=0
    for i in range(num):
        allgup +=float(grade[i])*float(credit[i])
        allgdown += float(credit[i])
    allg = float(allgup / allgdown)
    return allg

def allscore (s,num):
    alls = 0
    for i in range(num):
       alls +=int(s[i])
    return alls 
