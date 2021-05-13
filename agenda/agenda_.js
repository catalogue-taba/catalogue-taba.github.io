function event_maternelles() {
	var accueil_maternelles = [];
	var grands1 = [15, 4, 2021, 'CP et grandes sections'];
		accueil_maternelles.splice(0, 0, grands1);
	var moyens1 = [16, 5, 2021, 'moyennes sections'];
		accueil_maternelles.splice(1, 0, moyens1);
	var petits1 = [17, 6, 2021, 'petites sections'];
		accueil_maternelles.splice(2, 0, petits1);
	var grands2 = [18, 6, 2021, 'CP et grandes sections'];
		accueil_maternelles.splice(3, 0, grands2);
	var moyens2 = [20, 6, 2021, 'moyennes sections'];
		accueil_maternelles.splice(4, 0, moyens2);
		
	return accueil_maternelles;
}

function event_bricolages() {
	var dates_bricolages = [];
	var bricolage1 = [17, 5, 2021, 'printemps'];
		dates_bricolages.splice(0, 0, bricolage1);
	var bricolage2 = [15, 6, 2021, 'été'];
		dates_bricolages.splice(1, 0, bricolage2);
	
	return dates_bricolages;
}

function date() {
	var date = new Date();
	var jour = date.getDate();
	var mois = date.getMonth();
	var annee = date.getYear();

	document.getElementById('cache').innerHTML = '<input type="button" id="jour" value="'+jour+'"/><input type="button" id="mois" value="'+mois+'"/><input type="button" id="annee" value="'+annee+'"/>';
	
}
function afficher_titre() {
	var mois_affiche = document.getElementById('mois').value;
	var annee_affiche = document.getElementById('annee').value;

	if(annee_affiche<=200)
		{
			annee = Number(annee_affiche) + 1900;
		}
    mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
    jours_dans_moi = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if(annee%4 == 0 && annee!=1900)
		{
			jours_dans_moi[1]=29;
		}
    total = jours_dans_moi[mois_affiche];
	document.getElementById('titre').innerHTML = '<p>'+mois[mois_affiche]+' '+annee+'</p>';
}




function calendrier()
{

	var jour = document.getElementById('jour').value;
	var moi = document.getElementById('mois').value;
	var annee = document.getElementById('annee').value;
	var annee = Number(annee) +1900;
	var date = new Date(annee, moi, jour);
	
	var date_du_jour = new Date();
	var jour_date_jour = date_du_jour.getDate();
	var mois_date_jour = date_du_jour.getMonth();
	var annee_date_jour = date_du_jour.getYear();
	var annee_date_jour= Number(annee_date_jour) +1900;
	
	var accueil_maternelles = event_maternelles();
	var affiche_maternelles=[];
	for(j=0;j<accueil_maternelles.length;j++)
	{
	verif_moi = Number(moi)+1;
	if(accueil_maternelles[j][1]==verif_moi && accueil_maternelles[j][2]==annee)
	{
	affiche_maternelles.splice(j, 0, accueil_maternelles[j][0]);
	}}
	
	var bricolages = event_bricolages();
	var affiche_bricolages = [];
	for(j=0;j<bricolages.length;j++)
	{
	verif_moi=Number(moi)+1;
	if(bricolages[j][1]==verif_moi && bricolages[j][2]==annee)
	{
	affiche_bricolages.splice(j, 0, bricolages[j][0]);
	}}
	
	var test_afficher_event=0;
	if(affiche_maternelles.length!=0 || affiche_bricolages.length!=0)
	{
	var test_afficher_event=1;
	}
	
    
    mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
    jours_dans_moi = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if(annee%4 == 0 && annee!=1900)
    {
        jours_dans_moi[1]=29;
    }
    total = jours_dans_moi[moi];
	
    dep_j = date;
    dep_j.setDate(1);
    if(dep_j.getDate()==2)
    {
        dep_j=setDate(0);
    }
    dep_j = dep_j.getDay();
    chaine_liste = '<tbody id="cal_body">';
	chaine_liste += '<tr class="cal_j_semaines"><th>D</th><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th></tr><tr>';
    
	sem = 0;
    for(i=1;i<=dep_j;i++)
    {
        chaine_liste += '<td class="cal_jours_av_ap">'+(jours_dans_moi[moi-1]-dep_j+i)+'</td>';
        sem++;
    }
    for(i=1;i<=total;i++)
    {
	var pour_verif=1;
        if(sem==0)
        {
            chaine_liste += '<tr>';
        }
        if(jour_date_jour==i && moi==mois_date_jour && annee==annee_date_jour)
        {
            chaine_liste += '<td class="cal_aujourdhui">'+i+'</td>';
			var pour_verif=0;
        }
		else if(test_afficher_event==1)
		{
		
			if(affiche_maternelles.length!=0)
			{
			for(j=0;j<affiche_maternelles.length;j++)
			{
				if(affiche_maternelles[j]==i)
				{
				chaine_liste += '<td class="maternelles">'+i+'</td>';
				var pour_verif=0;
				}
			}
			}
			
			if(affiche_bricolages.length!=0)
			{
			for(j=0;j<affiche_bricolages.length;j++)
			{
				if(affiche_bricolages[j]==i)
				{
				chaine_liste += '<td class="bricolages">'+i+'</td>';
				var pour_verif=0;
				}
			}
			}
			
			if(pour_verif==1)
			{
			chaine_liste += '<td>'+i+'</td>';
			}
		}

        else if(pour_verif==1)
        {
            chaine_liste += '<td>'+i+'</td>';
        }
        sem++;
        if(sem==7)
        {
            chaine_liste += '</tr>';
            sem=0;
        }
    }
    for(i=1;sem!=0;i++)
    {
        chaine_liste += '<td class="cal_jours_av_ap">'+i+'</td>';
        sem++;
        if(sem==7)
        {
            chaine_liste += '</tr>';
            sem=0;
        }
    }
    chaine_liste += '</tbody></table>';
document.getElementById('cal_calendrier').innerHTML = chaine_liste;


}


function affichage_event() {
var date = new Date();
var jour = date.getDate();
var mois = date.getMonth();
var annee = date.getYear();
var date_jour = new Date(Number(annee)+1900, mois, jour);

var pour_affichage = [];

var dates_maternelles = event_maternelles();
	if(dates_maternelles.length!=0)
	{
		var verif_maternelles = [];
		for(i=0;i<dates_maternelles.length;i++)
		{
			var verif = new Date(dates_maternelles[i][2], Number(dates_maternelles[i][1])-1, dates_maternelles[i][0]);
			if(verif>=date_jour)
			{
				verif_maternelles.splice(i, 0, [dates_maternelles[i][0], dates_maternelles[i][1], dates_maternelles[i][2], dates_maternelles[i][3], 'maternelles']);
			}
		}
		if(verif_maternelles.length>3)
		{
			nb_supp = Number(verif_maternelles.length)-3;
			var suppr = verif_maternelles.splice(3, nb_supp);
		}
		for(j=0;j<verif_maternelles.length;j++)
		{
			pour_affichage.splice(j, 0, verif_maternelles[j]);
		}
	}
	
var dates_bricolages = event_bricolages();
	if(dates_bricolages.length!=0)
	{
		var verif_bricolages = [];
		for(z=0;z<dates_bricolages.length;z++)
		{
			var verif = new Date(dates_bricolages[z][2], Number(dates_bricolages[z][1])-1, dates_bricolages[z][0]);
			if(verif>=date_jour)
			{
				verif_bricolages.splice(z, 0, [dates_bricolages[z][0], dates_bricolages[z][1], dates_bricolages[z][2], dates_bricolages[z][3], 'bricolages']);
			}
		}
		if(verif_bricolages.length>3)
		{
			nb_supp = Number(verif_bricolages.length)-3;
			var suppr = verif_bricolages.splice(3, nb_supp);
		}
		for(y=0;y<verif_bricolages.length;y++)
		{
			pour_affichage.splice(y, 0, verif_bricolages[y]);
		}
	}

if(pour_affichage.length!=0) {
	for(i=0;i<pour_affichage.length;i++)
	{
		var pour_tri = new Date(pour_affichage[i][2], Number(pour_affichage[i][1])-1, pour_affichage[i][0]);
		var test = pour_tri.getTime();
		pour_affichage[i].splice(0, 0, test);
		
	}
	
	pour_affichage.sort(function(a, b) {
	return a[0] - b[0];});
	
	if(pour_affichage.length!=0) 
	{
		if(pour_affichage.length>3)
		{
			var supp = Number(pour_affichage.length)-3;
			affichage_ok = pour_affichage;
			var a_suppr = affichage_ok.splice(3, supp);
		}
	}
	
	chaine_liste2 = '<p style="display:none;"></p>';
	for(i=0;i<affichage_ok.length;i++)
	{
		if(affichage_ok[i][5]=='maternelles')
		{
			chaine_liste2 += '<p class="maternelles_aff">Le '+affichage_ok[i][1]+'/'+affichage_ok[i][2]+'/'+affichage_ok[i][3]+' : '+affichage_ok[i][4];
		}
		if(affichage_ok[i][5]=='bricolages')
		{
			chaine_liste2 += '<p class="bricolages_aff">Le '+affichage_ok[i][1]+'/'+affichage_ok[i][2]+'/'+affichage_ok[i][3]+' : '+affichage_ok[i][4];
		}
	}
	document.getElementById('afficher_dates').innerHTML = chaine_liste2;
	
}
}
